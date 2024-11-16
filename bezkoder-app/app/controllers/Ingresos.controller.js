const db = require("../models");
const Ingreso = db.Ingresos;

exports.getSaldos = async (req, res) => {
    try {
        const logisticaID = req.params.id;

        // Validar la existencia de la logística
        const logistica = await db.Logistica.findByPk(logisticaID);
        if (!logistica) {
            return res.status(404).send({ message: "Logística no encontrada." });
        }

        // Validar la existencia del grupo relacionado
        const grupo = await db.Grupo.findByPk(logistica.GrupoID);
        if (!grupo) {
            return res.status(404).send({ message: "Grupo asociado a la logística no encontrado." });
        }

        // Calcular el total pagado en logística
        const totalPagadoLogistica = await db.Ingresos.sum('PagoConIVA', { where: { LogisticaID: logisticaID } }) || 0;

        // Actualizar el monto "Real" en logística si es necesario
        if (logistica.Real !== totalPagadoLogistica) {
            await db.Logistica.update(
                { Real: totalPagadoLogistica },
                { where: { ID: logisticaID } }
            );
        }

        const saldoRestanteLogistica = logistica.Pago - totalPagadoLogistica;

        // Calcular el total pagado en el grupo
        const totalPagadoGrupo = await db.Ingresos.sum('PagoConIVA', {
            where: {
                LogisticaID: await db.Logistica.findAll({
                    where: { GrupoID: grupo.ID },
                    attributes: ['ID']
                })
            }
        }) || 0;

        // Actualizar el monto "Real" en el grupo si es necesario
        if (grupo.Real !== totalPagadoGrupo) {
            await db.Grupo.update(
                { Real: totalPagadoGrupo },
                { where: { ID: grupo.ID } }
            );
        }

        const saldoRestanteGrupo = grupo.Facturado - totalPagadoGrupo;

        // Respuesta final
        res.send({
            logistica: {
                LogisticaID: logisticaID,
                Facturado: logistica.Pago,
                Real: totalPagadoLogistica,
                SaldoRestante: saldoRestanteLogistica
            },
            grupo: {
                GrupoID: grupo.ID,
                Facturado: grupo.Facturado,
                Real: totalPagadoGrupo,
                SaldoRestante: saldoRestanteGrupo
            }
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al consultar los saldos.",
            error: error.message
        });
    }
};



exports.create = async (req, res) => {
    try {
        const {
            Fecha,
            Nombre,            
            Grupo,
            Agencia,
            PagoConIVA,
            TipoDePago,
            PagoSinIVA,            
            Moneda,
            CentroFinanciero,            
            Notas,
            Pagador,
            NumeroDeOrden,
            Identificador,
            Desl,
            Factura,
            Responsable,
            LogisticaID
        } = req.body;

        if (!Nombre || !PagoConIVA || !LogisticaID) {
            return res.status(400).send({
                message: "Los campos Nombre, PagoConIVA y LogisticaID son obligatorios."
            });
        }

        // Validar la existencia de la logística
        const logistica = await db.Logistica.findByPk(LogisticaID);
        if (!logistica) {
            return res.status(404).send({ message: "Logística no encontrada." });
        }

        // Validar la relación con el grupo
        const grupo = await db.Grupo.findByPk(logistica.GrupoID);
        if (!grupo) {
            return res.status(404).send({ message: "Grupo asociado a la logística no encontrado." });
        }

        // Validar montos en logística
        const totalPagadoLogistica = await db.Ingresos.sum('PagoConIVA', { where: { LogisticaID } }) || 0;
        const saldoRestanteLogistica = grupo.Facturado - totalPagadoLogistica;


        // Log para depuración
        console.log("=== Valores Calculados ===");
        console.log(`PagoConIVA (Ingreso actual): ${PagoConIVA}`);
        console.log(`Total Pagado en Logística (antes del ingreso): ${totalPagadoLogistica}`);
        console.log(`Saldo Restante en Logística: ${saldoRestanteLogistica}`);

        if (PagoConIVA > saldoRestanteLogistica) {
            return res.status(400).send({
                message: `El ingreso excede el saldo restante de la logística (${saldoRestanteLogistica}).`
            });
        }

        // Validar montos en grupo
        const totalPagadoGrupo = await db.Ingresos.sum('PagoConIVA', {
            where: {
                LogisticaID: await db.Logistica.findAll({ where: { GrupoID: grupo.ID }, attributes: ['ID'] })
            }
        }) || 0;

        const saldoRestanteGrupo = grupo.Facturado - totalPagadoGrupo;

        if (PagoConIVA > saldoRestanteGrupo) {
            return res.status(400).send({
                message: `El ingreso excede el saldo restante del grupo (${saldoRestanteGrupo}).`
            });
        }

        // Crear ingreso
        const nuevoIngreso = await db.Ingresos.create({
            Fecha,
            Nombre,            
            Grupo,
            Agencia,
            PagoConIVA,
            TipoDePago,
            PagoSinIVA,            
            Moneda,
            CentroFinanciero,                        
            Notas,
            Pagador,
            NumeroDeOrden,
            Identificador,
            Desl,
            Factura,
            Responsable,
            LogisticaID
        });

        // Actualizar el monto "Real" en logística
        const nuevoTotalPagadoLogistica = totalPagadoLogistica + PagoConIVA;
        const nuevoPagoLogistica = logistica.Pago - PagoConIVA;
        await db.Logistica.update(
            { Real: nuevoTotalPagadoLogistica, Pago: nuevoPagoLogistica },
            { where: { ID: LogisticaID } }
        );

        // Actualizar el monto "Real" en el grupo
        const nuevoTotalPagadoGrupo = totalPagadoGrupo + PagoConIVA;
        await db.Grupo.update(
            { Real: nuevoTotalPagadoGrupo },
            { where: { ID: grupo.ID } }
        );

        res.status(201).send({
            message: "Ingreso registrado correctamente.",
            ingreso: nuevoIngreso,
            logistica: {
                LogisticaID: logistica.ID,
                Facturado: logistica.Pago,
                Real: nuevoTotalPagadoLogistica,
                SaldoRestante: nuevoPagoLogistica
            },
            grupo: {
                GrupoID: grupo.ID,
                Facturado: grupo.Facturado,
                Real: nuevoTotalPagadoGrupo,
                SaldoRestante: grupo.Facturado - nuevoTotalPagadoGrupo
            }
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al registrar el ingreso.",
            error: error.message
        });
    }
};





// Recuperar todos los Ingresos de la base de datos
exports.findAll = (req, res) => {
    Ingreso.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los ingresos."
            });
        });
};

// Encontrar un único Ingreso con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ingreso.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Ingreso con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Ingreso con id=" + id
            });
        });
};

// Actualizar un Ingreso por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Ingreso.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingreso actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Ingreso con id=${id}. Quizás el Ingreso no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Ingreso con id=" + id
            });
        });
};

// Eliminar un Ingreso con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Ingreso.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingreso eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Ingreso con id=${id}. Quizás el Ingreso no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Ingreso con id=" + id
            });
        });
};

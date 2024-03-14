-- Tabla de Usuarios
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    CorreoElectronico VARCHAR(100),
    Contraseña VARCHAR(255),
    Rol VARCHAR(50)
);

-- Tabla de Reservas
CREATE TABLE Reservas (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    FechaInicio DATETIME,
    FechaFin DATETIME,
    Estado VARCHAR(50),
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

-- Tabla de Paquetes
CREATE TABLE Paquetes (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Descripcion TEXT,
    Precio DECIMAL(10, 2)
);

-- Tabla de Detalles de Reservas (relación muchos a muchos entre Reservas y Paquetes)
CREATE TABLE DetallesReservas (
    ReservaID INT,
    PaqueteID INT,
    Cantidad INT,
    PRIMARY KEY (ReservaID, PaqueteID),
    FOREIGN KEY (ReservaID) REFERENCES Reservas(ID),
    FOREIGN KEY (PaqueteID) REFERENCES Paquetes(ID)
);

-- Tabla de Proveedores
CREATE TABLE Proveedores (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Contacto VARCHAR(100),
    Telefono VARCHAR(20),
    CorreoElectronico VARCHAR(100)
);

-- Tabla de Productos
CREATE TABLE Productos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Descripcion TEXT,
    Precio DECIMAL(10, 2),
    ProveedorID INT,
    FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ID)
);

-- Tabla de Agencias de Viaje
CREATE TABLE AgenciasDeViaje (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Contacto VARCHAR(100),
    Telefono VARCHAR(20),
    CorreoElectronico VARCHAR(100)
);

-- Tabla de Categorias
CREATE TABLE Categorias (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100)
);

-- Tabla de Geografia
CREATE TABLE Geografia (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Region VARCHAR(100),
    Zona VARCHAR(100),
    PuntoInteresTuristico VARCHAR(100)
);

-- Otras tablas según tus necesidades


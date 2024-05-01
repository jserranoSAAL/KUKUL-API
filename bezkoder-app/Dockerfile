FROM node:14

WORKDIR /bezkoder-app
COPY package.json .
RUN npm install
RUN npm install bcrypt
RUN npm install jsonwebtoken
RUN npm install nodemon -g
RUN npm install aws-sdk
RUN npm install multer
RUN npm install multer-s3@2.10.0
RUN npm install @aws-sdk/client-s3
RUN npm install swagger-ui-express
RUN npm install swagger-jsdoc
COPY . .
CMD nodemon server.js

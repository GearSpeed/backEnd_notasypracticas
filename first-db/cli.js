require("dotenv").config();
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
//modelo
const Koder = mongoose.model(
  "koder",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    lastName: {
      type: String,
      required: false,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);

//mongo+srv protocolo
//http://
//https://
//protocolo://usuario:password@host/dbName
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Conexión exitosa");
    // insertar
    Koder.create({
      firstName: "Omar",
      lastName: "Sampayo",
      email: "omar123@sampayo.com",
      birthDate: new Date("1993-12-24"),
      generation: 33,
    })
      .then(() => console.log("Koder created"))
      .catch((error) => {
        console.error("Error al conectar con la base de datos2", error);
      });
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos", error);
  });

// Promesas / Promises

/*
    Las promesas por defecto nacen o se crean en estado pendiente
    - resolve: se resuelve la promesa (then)
    -reject: se rechaza la promesa (catch)
*/

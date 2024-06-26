"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connexionDB = () => {
    const URL = String(process.env.URL_SERVER_MONGO);
    (0, mongoose_1.connect)(URL)
        .then(() => {
        console.log("Conexion establecida con " + URL);
    })
        .catch((miErrorsito) => {
        console.log(miErrorsito);
    });
};
exports.default = connexionDB;

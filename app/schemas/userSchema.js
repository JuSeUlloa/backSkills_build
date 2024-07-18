"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nameUser: { type: String, required: true },
    lastNameUser: { type: String, required: true },
    telephoneUser: { type: String, required: true, default: "Pendiente" },
    publicPhotoUser: { type: String, required: true, default: "noDisponible.jpg" },
    privatePhotoUser: { type: String, required: true },
    stateUser: { type: Number, required: true, default: 1 },
    auditLogUser: { type: Object, required: true },
    codRole: { type: mongoose_1.Types.ObjectId, ref: "Role", required: true, default: new mongoose_1.Types.ObjectId("6698403b5ea2671d5acea723") }
});
exports.default = (0, mongoose_1.model)("User", UserSchema, "User");

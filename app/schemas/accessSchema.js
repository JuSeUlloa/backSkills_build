"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AccessSchema = new mongoose_1.Schema({
    emailAccess: { type: String, required: true, unique: true },
    passwordAccess: { type: String, required: true },
    uuidAccess: { type: String, required: true },
    codUser: { type: mongoose_1.Types.ObjectId, ref: "User", required: true }
});
exports.default = (0, mongoose_1.model)("Access", AccessSchema, "Access");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    nameRole: { type: String, required: true, unique: true },
    stateRole: { type: Number, required: true },
    auditLogRole: { type: Object, required: true }
});
exports.default = (0, mongoose_1.model)("Role", RoleSchema, "Role");

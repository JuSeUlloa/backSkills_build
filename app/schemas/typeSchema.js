"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TypeSchema = new mongoose_1.Schema({
    nameType: { type: String, required: true },
    descriptionType: { type: String },
    stateType: { type: Number, required: true, default: 1 }
});
exports.default = (0, mongoose_1.model)("Type", TypeSchema, "Type");

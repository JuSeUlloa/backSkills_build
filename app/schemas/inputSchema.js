"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InputSchema = new mongoose_1.Schema({
    dateInput: { type: Date, default: Date.now },
    codAccess: { type: mongoose_1.Types.ObjectId, ref: "Access", required: true }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    clientService: { type: String, required: true },
    startDateService: { type: Date, required: true },
    endDateService: { type: Date, required: true },
    costService: { type: Number, required: true },
    stateService: { type: Number, required: true, default: 1 },
    codType: { type: mongoose_1.Types.ObjectId, ref: "Type", required: true }
});
exports.default = (0, mongoose_1.model)("Service", ServiceSchema, "Service");

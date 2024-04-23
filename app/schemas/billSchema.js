"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BillSchema = new mongoose_1.Schema({
    nameBill: { type: String, required: true },
    descriptionBill: { type: String, required: true },
    valueBill: { type: Number, required: true },
    dateBill: { type: Date, required: true },
});
exports.default = (0, mongoose_1.model)("Bill", BillSchema, "Bill");

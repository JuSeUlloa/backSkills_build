"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const billDao_1 = __importDefault(require("../dao/billDao"));
class BillController extends billDao_1.default {
    insertBill(req, res) {
        const objBill = req.body;
        BillController.addBill(res, objBill);
    }
    getBills(req, res) {
        BillController.getAll(res);
    }
}
const billController = new BillController();
exports.default = billController;

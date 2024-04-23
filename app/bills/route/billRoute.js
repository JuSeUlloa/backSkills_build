"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const billController_1 = __importDefault(require("../controller/billController"));
class BillRoute {
    constructor() {
        this.apiRouteBill = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteBill.get('/all', billController_1.default.getBills);
        this.apiRouteBill.post('/add', billController_1.default.insertBill);
    }
}
const billRoute = new BillRoute();
exports.default = billRoute.apiRouteBill;

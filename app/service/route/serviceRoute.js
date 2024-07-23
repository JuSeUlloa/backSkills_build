"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceController_1 = __importDefault(require("../controller/serviceController"));
class ServiceRoute {
    constructor() {
        this.apiServiceRoute = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiServiceRoute.get("/all", serviceController_1.default.getAllservices);
        this.apiServiceRoute.get("/one/:codservice", serviceController_1.default.getservice);
        this.apiServiceRoute.post("/add", serviceController_1.default.createservice);
        this.apiServiceRoute.put("/update", serviceController_1.default.updateservice);
        this.apiServiceRoute.delete("/state/:codservice/:state", serviceController_1.default.deleteservice);
        this.apiServiceRoute.delete("/delete/:codservice", serviceController_1.default.deleteservice);
    }
}
const serviceRoute = new ServiceRoute();
exports.default = serviceRoute.apiServiceRoute;

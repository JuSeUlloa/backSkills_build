"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeController_1 = __importDefault(require("../controller/typeController"));
class TypeRoute {
    constructor() {
        this.apiTypeRoute = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiTypeRoute.get("/all", typeController_1.default.getAllTypes);
        this.apiTypeRoute.get("/one/:codType", typeController_1.default.getType);
        this.apiTypeRoute.post("/add", typeController_1.default.createType);
        this.apiTypeRoute.put("/update", typeController_1.default.updateType);
        this.apiTypeRoute.delete("/state/:codType/:state", typeController_1.default.deleteType);
        this.apiTypeRoute.delete("/delete/:codType", typeController_1.default.deleteType);
    }
}
const typeRoute = new TypeRoute();
exports.default = typeRoute.apiTypeRoute;

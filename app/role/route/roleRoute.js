"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = __importDefault(require("../controller/roleController"));
class RoleRoute {
    constructor() {
        this.apiRouteRole = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteRole.get("/all", roleController_1.default.allRoles);
    }
}
const roleRoute = new RoleRoute();
exports.default = roleRoute.apiRouteRole;

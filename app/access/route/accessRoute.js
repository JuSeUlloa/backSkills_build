"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accessController_1 = __importDefault(require("../controller/accessController"));
const tokenController_1 = __importDefault(require("../controller/tokenController"));
class AccessRouter {
    constructor() {
        this.apiRouteAccess = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteAccess.post("/signin", accessController_1.default.signin);
        this.apiRouteAccess.get("/uuid", tokenController_1.default.getUUID);
    }
}
const accessRouter = new AccessRouter();
exports.default = accessRouter.apiRouteAccess;

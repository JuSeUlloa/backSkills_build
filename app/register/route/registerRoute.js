"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerContoller_1 = __importDefault(require("../controller/registerContoller"));
class RegisterRouter {
    constructor() {
        this.apiRouteRegister = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteRegister.post("/user", registerContoller_1.default.registerUser);
        this.apiRouteRegister.post("/emailCheck", registerContoller_1.default.verify);
    }
}
const registerRouter = new RegisterRouter();
exports.default = registerRouter.apiRouteRegister;

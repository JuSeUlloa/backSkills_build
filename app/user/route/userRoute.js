"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
class UserRoute {
    constructor() {
        this.apiRouteUser = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteUser.get("/all", userController_1.default.allusers);
    }
}
const userRoute = new UserRoute();
exports.default = userRoute.apiRouteUser;

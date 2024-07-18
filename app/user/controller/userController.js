"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDao_1 = __importDefault(require("../dao/userDao"));
class UserController extends userDao_1.default {
    allusers(req, res) {
        UserController.get(res);
    }
}
const userController = new UserController();
exports.default = userController;

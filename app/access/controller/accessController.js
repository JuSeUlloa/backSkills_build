"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesDao_1 = __importDefault(require("../dao/accesDao"));
class AccessController extends accesDao_1.default {
    signin(req, res) {
        const objAcces = req.body;
        AccessController.signinUser(res, objAcces);
    }
}
const accessController = new AccessController();
exports.default = accessController;

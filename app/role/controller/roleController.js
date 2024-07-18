"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roleDao_1 = __importDefault(require("../dao/roleDao"));
class RoleController extends roleDao_1.default {
    allRoles(req, res) {
        RoleController.get(res);
    }
}
const roleController = new RoleController();
exports.default = roleController;

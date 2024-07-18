"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerDao_1 = __importDefault(require("../dao/registerDao"));
const nanoid_1 = require("nanoid");
const generateAudit_1 = require("../../../config/utilities/functions/generateAudit");
class RegisterController extends registerDao_1.default {
    verify(req, res) {
        const emailAccess = String(req.body.emailAccess);
        RegisterController.verifyEmail(res, emailAccess);
    }
    registerUser(req, res) {
        const paramUser = {
            nameUser: req.body.nameUser,
            lastNameUser: req.body.lastNameUser,
            privatePhotoUser: (0, nanoid_1.nanoid)(5) + '_.jpg',
            auditLogUser: (0, generateAudit_1.auditJsonAdd)(req.body.emailAccess)
        };
        const paramAccess = {
            emailAccess: req.body.emailAccess,
            passwordAccess: req.body.passwordAccess,
            uuidAccess: (0, nanoid_1.nanoid)(20)
        };
        RegisterController.newUser(res, paramUser, paramAccess);
    }
}
const registerController = new RegisterController();
exports.default = registerController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Security {
    verifyToken(req, res, next) {
        var _a;
        if (!req.headers.authorization) {
            res.status(401).json({
                Respuesta: "Petición negada por el sistema de seguridad",
            });
        }
        else {
            try {
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                const data = jsonwebtoken_1.default.verify(token, "f5e83d2ffba8d065b130701c37ad171aaae1f2a1cad231ab12e0486e4d5e686d987ee95646baf199842559c2e3aee8af45ef22d18452e7760daafc83bb3839db");
                req.body.userData = data;
                next();
            }
            catch (error) {
                res.status(401).json({
                    Respuesta: "Token no valido",
                });
            }
        }
    }
}
const security = new Security();
exports.default = security;

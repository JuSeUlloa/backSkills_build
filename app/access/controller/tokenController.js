"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenDao_1 = __importDefault(require("../dao/tokenDao"));
class TokenContoller extends tokenDao_1.default {
    getUUID(req, res) {
        const codUsuario = String(req.body.userData.id);
        TokenContoller.queryUUID(res, codUsuario);
    }
}
const tokenController = new TokenContoller();
exports.default = tokenController;

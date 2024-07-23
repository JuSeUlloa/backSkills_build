"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeDao_1 = __importDefault(require("../dao/typeDao"));
class TypeController extends typeDao_1.default {
    getAllTypes(req, res) {
        TypeController.getAll(res);
    }
    getType(req, res) {
        const codType = String(req.params.codType);
        if (codType !== undefined) {
            TypeController.getOne(res, codType);
        }
        else {
            res.status(400).json({ messaje: "Code type invalid" });
        }
    }
    createType(req, res) {
        const objType = req.body;
        TypeController.addType(res, objType);
    }
    updateType(req, res) {
        delete req.body.userData;
        const objType = req.body;
        const codType = req.body._id;
        TypeController.update(res, codType, objType);
    }
    stateType(req, res) {
        const codType = String(req.params.codType);
        const state = Number(req.params.stateType);
        if (codType !== undefined && !isNaN(state)) {
            if (state == 1) {
                TypeController.state(res, codType, 2);
            }
            else {
                TypeController.state(res, codType, 1);
            }
        }
        else {
            res.status(400).json({ messaje: "Code type invalid" });
        }
    }
    deleteType(req, res) {
        const codType = String(req.params.codType);
        if (codType !== undefined) {
            TypeController.delete(res, codType);
        }
        else {
            res.status(400).json({ messaje: "Code type invalid" });
        }
    }
}
const typeController = new TypeController();
exports.default = typeController;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeSchema_1 = __importDefault(require("../../schemas/typeSchema"));
class TypeDao {
    static addType(res, objType) {
        return __awaiter(this, void 0, void 0, function* () {
            typeSchema_1.default.create(objType)
                .then((response) => {
                res.status(200).json({ message: "Inset Type", _id: response._id });
            }).catch((err) => {
                console.log(err);
                res.status(400).json({ message: " Failed register Type" });
            });
        });
    }
    static getAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            typeSchema_1.default.find().then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to load data" });
            });
        });
    }
    static getOne(res, codType) {
        return __awaiter(this, void 0, void 0, function* () {
            typeSchema_1.default.findById(codType).then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to load type" });
            });
        });
    }
    static update(res, codType, objType) {
        return __awaiter(this, void 0, void 0, function* () {
            typeSchema_1.default.findByIdAndUpdate(codType, { $set: { nameType: objType.nameType, descriptionType: objType.descriptionType } }).then((response) => {
                res.status(200).json({ messaje: "Update type", response: response });
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update type" });
            });
        });
    }
    static state(res, codType, state) {
        return __awaiter(this, void 0, void 0, function* () {
            typeSchema_1.default.findByIdAndUpdate(codType, { $set: { stateType: state } }).then((response) => {
                res.status(200).json({ messaje: "updtae state", response: response });
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update state" });
            });
        });
    }
    static delete(res, codType) {
        return __awaiter(this, void 0, void 0, function* () {
            typeSchema_1.default.findByIdAndDelete(codType).then((response) => {
                res.status(200).json({ messaje: "Delete type", response: response });
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update state" });
            });
        });
    }
}
exports.default = TypeDao;

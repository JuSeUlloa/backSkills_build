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
const categorySchema_1 = __importDefault(require("../../schemas/categorySchema"));
class CategoryDao {
    static addCategory(res, objCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            categorySchema_1.default.create(objCategory)
                .then((response) => {
                res.status(200).json({ message: "Inset Category", _id: response._id });
            }).catch((err) => {
                res.status(400).json({ message: " Failed register Category" });
            });
        });
    }
    static getAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            categorySchema_1.default.find().sort({ nameCategory: 1 }).then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to load data" });
            });
        });
    }
    static update(res, objCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            categorySchema_1.default.updateOne({ _id: objCategory._id }, objCategory)
                .then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update" });
            });
        });
    }
    static delete(res, idCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            categorySchema_1.default.deleteOne({ _id: idCategory })
                .then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to delete" });
            });
        });
    }
}
exports.default = CategoryDao;

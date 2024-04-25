"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryDao_1 = __importDefault(require("../dao/categoryDao"));
class CategoryController extends categoryDao_1.default {
    insertCategory(req, res) {
        const objCategory = req.body;
        CategoryController.addCategory(res, objCategory);
    }
    getCategories(req, res) {
        CategoryController.getAll(res);
    }
    updateCategory(req, res) {
        const objCategory = req.body;
        CategoryController.update(res, objCategory);
    }
    deleteCategory(req, res) {
        if (req.params.idCategory) {
            const id = String(req.params.idCategory);
            CategoryController.delete(res, id);
        }
        else {
            res.status(400).json({ message: "category code no valid" });
        }
    }
}
const categoryController = new CategoryController();
exports.default = categoryController;

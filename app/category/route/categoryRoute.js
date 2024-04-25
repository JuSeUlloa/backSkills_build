"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controller/categoryController"));
class CategoryRoute {
    constructor() {
        this.apiRouteCategory = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteCategory.get('/all', categoryController_1.default.getCategories);
        this.apiRouteCategory.post('/add', categoryController_1.default.insertCategory);
        this.apiRouteCategory.put('/update', categoryController_1.default.updateCategory);
        this.apiRouteCategory.delete('/delete/:idCategory', categoryController_1.default.deleteCategory);
    }
}
const categoryRoute = new CategoryRoute();
exports.default = categoryRoute.apiRouteCategory;

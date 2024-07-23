"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceDao_1 = __importDefault(require("../../service/dao/serviceDao"));
class ServiceController extends serviceDao_1.default {
    getAllservices(req, res) {
        ServiceController.getAll(res);
    }
    getservice(req, res) {
        const codservice = String(req.params.codservice);
        if (codservice !== undefined) {
            ServiceController.getOne(res, codservice);
        }
        else {
            res.status(400).json({ messaje: "Code service invalid" });
        }
    }
    createservice(req, res) {
        const objservice = req.body;
        ServiceController.addService(res, objservice);
    }
    updateservice(req, res) {
        delete req.body.userData;
        const objservice = req.body;
        const codservice = req.body._id;
        ServiceController.update(res, codservice, objservice);
    }
    stateservice(req, res) {
        const codservice = String(req.params.codservice);
        const state = Number(req.params.stateservice);
        if (codservice !== undefined && !isNaN(state)) {
            if (state == 1) {
                ServiceController.state(res, codservice, 2);
            }
            else {
                ServiceController.state(res, codservice, 1);
            }
        }
        else {
            res.status(400).json({ messaje: "Code service invalid" });
        }
    }
    deleteservice(req, res) {
        const codservice = String(req.params.codservice);
        if (codservice !== undefined) {
            ServiceController.delete(res, codservice);
        }
        else {
            res.status(400).json({ messaje: "Code service invalid" });
        }
    }
}
const serviceController = new ServiceController();
exports.default = serviceController;

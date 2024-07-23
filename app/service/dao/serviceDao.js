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
const serviceSchema_1 = __importDefault(require("../../schemas/serviceSchema"));
class ServiceDao {
    static addService(res, objService) {
        return __awaiter(this, void 0, void 0, function* () {
            serviceSchema_1.default.create(objService)
                .then((response) => {
                res.status(200).json({ message: "Insert Service", _id: response._id });
            }).catch((err) => {
                res.status(400).json({ message: " Failed register Service" });
            });
        });
    }
    static getAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            serviceSchema_1.default.find().then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to load data" });
            });
        });
    }
    static getOne(res, codService) {
        return __awaiter(this, void 0, void 0, function* () {
            serviceSchema_1.default.findById(codService).then((response) => {
                res.status(200).json(response);
            }).catch((err) => {
                res.status(400).json({ message: "Failed to load Service" });
            });
        });
    }
    static update(res, codService, objService) {
        return __awaiter(this, void 0, void 0, function* () {
            serviceSchema_1.default.findByIdAndUpdate(codService, {
                $set: {
                    clientService: objService.clientService, startDateService: objService.startDateService,
                    endDateService: objService.endDateService, costService: objService.costService, codType: objService.codType
                }
            }).then((response) => {
                res.status(200).json({ messaje: "Update Service", response: response });
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update Service" });
            });
        });
    }
    static state(res, codService, state) {
        return __awaiter(this, void 0, void 0, function* () {
            serviceSchema_1.default.findByIdAndUpdate(codService, { $set: { stateService: state } }).then((response) => {
                res.status(200).json({ messaje: "updtae state", response: response });
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update state" });
            });
        });
    }
    static delete(res, codService) {
        return __awaiter(this, void 0, void 0, function* () {
            serviceSchema_1.default.findByIdAndDelete(codService).then((response) => {
                res.status(200).json({ messaje: "Delete Service", response: response });
            }).catch((err) => {
                res.status(400).json({ message: "Failed to update state" });
            });
        });
    }
}
exports.default = ServiceDao;

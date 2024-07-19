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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const accessSchema_1 = __importDefault(require("../../schemas/accessSchema"));
const userSchema_1 = __importDefault(require("../../schemas/userSchema"));
const inputSchema_1 = __importDefault(require("../../schemas/inputSchema"));
const accessVerifyController_1 = __importDefault(require("../../shared/controller/accessVerifyController"));
class RegisterDao {
    static verifyEmail(res, email) {
        return __awaiter(this, void 0, void 0, function* () {
            accessSchema_1.default.countDocuments({ emailAccess: email }).exec()
                .then((response) => {
                switch (response) {
                    case 0:
                        res.status(200).json({ respuesta: "Puede continuar, correo no existe" });
                        break;
                    default:
                        res.status(400).json({ respuesta: "Correo existe" });
                        break;
                }
            }).catch((err) => {
                res.status(400).json("Failed to find email");
            });
        });
    }
    static newUser(res, objUser, objAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            let action = 1;
            const countEmail = yield accessSchema_1.default.countDocuments({ emailAccess: objAccess.emailAccess }).exec();
            let data = '';
            if (countEmail == 0) {
                action = 2;
                const passCrip = bcryptjs_1.default.hashSync(objAccess.passwordAccess);
                const user = yield userSchema_1.default.create(objUser);
                const codUser = user._id;
                objAccess.codUser = codUser;
                objAccess.passwordAccess = passCrip;
                yield accessSchema_1.default.create(objAccess);
                data = yield userSchema_1.default.findById(codUser).select({ _id: 1, nameUser: 1, lastNameUser: 1, privatePhotoUser: 1 }).populate('codRole').exec();
            }
            yield accessSchema_1.default.findOne({ emailAccess: objAccess.emailAccess }).select({ emailAccess: 1, uuidAccess: 1 })
                .then((response) => __awaiter(this, void 0, void 0, function* () {
                switch (action) {
                    case 1:
                        res.status(400).json({ messaje: "Correo ya existe" });
                        break;
                    case 2:
                        yield inputSchema_1.default.create({ codAccess: response._id });
                        let accessResponse = accessVerifyController_1.default.generateToken(data, response);
                        res.status(200).json(accessResponse);
                        break;
                }
            })).catch((err) => {
                res.status(400).json({ messaje: "Failed register to user" });
            });
        });
    }
}
exports.default = RegisterDao;

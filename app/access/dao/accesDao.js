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
const nanoid_1 = __importDefault(require("nanoid"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const accessSchema_1 = __importDefault(require("../../schemas/accessSchema"));
const userSchema_1 = __importDefault(require("../../schemas/userSchema"));
const accessVerifyController_1 = __importDefault(require("../../shared/controller/accessVerifyController"));
const inputSchema_1 = __importDefault(require("../../schemas/inputSchema"));
class AccessDao {
    static validateUser(objAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            let exist = yield accessSchema_1.default.find({ emailAccess: objAccess.emailAccess });
            let action = 0;
            let sesionData;
            if (exist.length > 0) {
                const objTmp = exist[0];
                if (bcryptjs_1.default.compareSync(objAccess.passwordAccess, objTmp.passwordAccess)) {
                    action = 1;
                    yield accessSchema_1.default.updateOne({ codUser: objTmp.codUser }, { $set: { uuidAccess: nanoid_1.default.nanoid(20) } });
                    yield inputSchema_1.default.create({ codAccess: objTmp._id });
                    exist = yield userSchema_1.default.findById(objTmp.codUser).select({ _id: 1, nameUser: 1, lastNameUser: 1, privatePhotoUser: 1 }).populate('codRole').exec();
                    sesionData = exist;
                }
            }
            else {
                exist = yield accessSchema_1.default.find({ emailAccess: objAccess.emailAccess });
                if (exist.length > 0) {
                    action = 2;
                }
            }
            return { action, sesionData };
        });
    }
    static signinUser(res, objAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateUser(objAccess).then((response) => __awaiter(this, void 0, void 0, function* () {
                switch (response.action) {
                    case 1:
                        let objTmp = yield accessSchema_1.default.findOne({ emailAccess: objAccess.emailAccess }).select({ emailAccess: 1, uuidAccess: 1 });
                        let accessResponse = accessVerifyController_1.default.generateToken(response.sesionData, objTmp);
                        res.status(200).json(accessResponse);
                        break;
                    case 2:
                        res.status(403).json({ messaje: "Invalid Password" });
                        break;
                    default:
                        res.status(401).json({ messaje: "Invalid User" });
                        break;
                }
            })).catch((err) => {
                console.log(err);
                res.status(400).json({ messaje: "Error to access" });
            });
        });
    }
}
exports.default = AccessDao;

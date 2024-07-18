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
const accessSchema_1 = __importDefault(require("../../schemas/accessSchema"));
class RegisterDao {
    static verifyEmail(res, email) {
        return __awaiter(this, void 0, void 0, function* () {
            accessSchema_1.default.countDocuments({ emailAccess: email }).exec()
                .then((response) => {
                console.log(response);
            }).catch((err) => {
                res.status(400).json("Failed to find email");
            });
        });
    }
    static newUser(res, objUser, objAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            let action = 1;
            const countEmail = yield accessSchema_1.default.find({ emailAccess: objAccess.emailAccess }).exec();
            if (countEmail.length == 0) {
            }
            else {
            }
        });
    }
}
exports.default = RegisterDao;

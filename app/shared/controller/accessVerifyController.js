"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const accessResponse_1 = __importDefault(require("../../models/accessResponse"));
const var_images_1 = __importDefault(require("../../../config/domain/var_images"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const manageImage_1 = __importDefault(require("../../../config/utilities/functions/manageImage"));
class AccessVerifyController {
    static generateToken(dataSesion, objAccess) {
        let base64 = "";
        const privateImageName = dataSesion.privatePhotoUser;
        let systemPath = var_images_1.default.defaultPhoto;
        let privatePathImage = var_images_1.default.pathUserPhotos + privateImageName;
        const payload = {
            id: dataSesion._id,
            codRole: dataSesion.codRole._id,
            nameRole: dataSesion.codRole.nameRole,
            uuidAccess: objAccess.uuidAccess,
            emailAccess: objAccess.emailAccess,
            nameUser: dataSesion.nameUser,
            lastNameUser: dataSesion.nameUser,
        };
        let password = 'f5e83d2ffba8d065b130701c37ad171aaae1f2a1cad231ab12e0486e4d5e686d987ee95646baf199842559c2e3aee8af45ef22d18452e7760daafc83bb3839db';
        const token = jsonwebtoken_1.default.sign(payload, password, { expiresIn: '8h' });
        if (fs_1.default.existsSync(privatePathImage)) {
            const rutaMiniatura = var_images_1.default.pathTemporalPhotos + privateImageName;
            manageImage_1.default.generateMiniature(privatePathImage, rutaMiniatura, 150);
            base64 = fs_1.default.readFileSync(rutaMiniatura, 'base64');
            fs_1.default.unlinkSync(rutaMiniatura);
        }
        else {
            base64 = fs_1.default.readFileSync(systemPath, 'base64');
        }
        return new accessResponse_1.default(token, base64);
    }
}
exports.default = AccessVerifyController;

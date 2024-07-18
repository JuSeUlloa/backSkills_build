"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
class ManageImage {
    static generateMiniature(privateImageName, miniatureImage, size) {
        let awaitTmp = true;
        const dataSharp = (0, sharp_1.default)(privateImageName)
            .resize({ width: size })
            .toFile(miniatureImage, (noHayError) => {
            if (noHayError) {
            }
            else {
                awaitTmp = false;
            }
        });
        while (awaitTmp) {
            require("deasync").sleep(250);
        }
        return dataSharp;
    }
    static addImage(privateImageName, base64, storageRouteImage) {
        let decodification = base64.replace(/^data:image\/\w+;base64,/, "");
        fs_1.default.readdir(storageRouteImage, (err) => {
            if (err) {
                fs_1.default.mkdirSync(storageRouteImage, { recursive: true });
            }
            fs_1.default.writeFile(storageRouteImage + privateImageName, decodification, { encoding: "base64" }, function () { });
        });
    }
    static removeImage(nombrePrivado, rutaAlmacenarImagen) {
        fs_1.default.unlink(rutaAlmacenarImagen + nombrePrivado, function (noEncontrada) {
            if (noEncontrada) {
                console.log("Failed delete to image");
            }
        });
    }
}
exports.default = ManageImage;

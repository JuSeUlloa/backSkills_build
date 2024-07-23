"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const connexionDB_1 = __importDefault(require("../connexion/connexionDB"));
const billRoute_1 = __importDefault(require("../../app/bills/route/billRoute"));
const categoryRoute_1 = __importDefault(require("../../app/category/route/categoryRoute"));
const accessRoute_1 = __importDefault(require("../../app/access/route/accessRoute"));
const registerRoute_1 = __importDefault(require("../../app/register/route/registerRoute"));
const roleRoute_1 = __importDefault(require("../../app/role/route/roleRoute"));
const userRoute_1 = __importDefault(require("../../app/user/route/userRoute"));
const security_1 = __importDefault(require("../../middleware/security"));
const typeRoute_1 = __importDefault(require("../../app/type/route/typeRoute"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        dotenv_1.default.config({ path: ".env" });
        (0, connexionDB_1.default)();
        this.startServer();
        this.routesActivate();
    }
    startServer() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({
            extended: true,
        }));
    }
    routesActivate() {
        /* Public Routes */
        this.app.use("/api/public/bill", billRoute_1.default);
        this.app.use("/api/public/access", accessRoute_1.default);
        this.app.use("/api/public/register", registerRoute_1.default);
        this.app.use("/api/public/category", categoryRoute_1.default);
        /* Private routes */
        this.app.use("/api/private/inclock", security_1.default.verifyToken, accessRoute_1.default);
        this.app.use("/api/public/role", roleRoute_1.default);
        this.app.use("/api/public/user", userRoute_1.default);
        this.app.use("/api/private/type", security_1.default.verifyToken, typeRoute_1.default);
    }
    listenServer() {
        this.app.listen(this.app.get("PORT"), () => {
            const port = this.app.get("PORT");
            console.log("local server runing to " + port);
        });
    }
}
exports.default = Server;

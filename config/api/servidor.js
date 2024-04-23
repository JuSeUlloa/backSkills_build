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
class Server {
    constructor() {
        (0, connexionDB_1.default)();
        this.app = (0, express_1.default)();
        dotenv_1.default.config({ path: ".env" });
        this.startServer();
        /* this.routesActivate(); */
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
    /*     public routesActivate(): void {
    
            this.app.use("/api/public",  apiRoteProduct );
        } */
    listenServer() {
        this.app.listen(this.app.get("PORT"), () => {
            const port = this.app.get("PORT");
            console.log("local server listen to " + port);
        });
    }
}
exports.default = Server;

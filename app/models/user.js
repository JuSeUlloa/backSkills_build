"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, codR, last, tele, pub, pri, stat, aud) {
        this.nameUser = name;
        this.codRole = codR;
        this.lastNameUser = last;
        this.telephoneUser = tele;
        this.publicPhotoUser = pub;
        this.privatePhotoUser = pri;
        this.stateUser = stat;
        this.auditLogUser = aud;
    }
}
exports.default = User;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditJsonAdd = void 0;
function auditJsonAdd(user) {
    return {
        "user_create_plataforma": user,
        "user_update_plataforma": user,
        "create_at_plataforma": new Date(Date.now()),
        "update_at_plataforma": new Date(Date.now())
    };
}
exports.auditJsonAdd = auditJsonAdd;

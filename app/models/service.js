"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(cod, clie, start, end, cos, stat) {
        this.codType = cod;
        this.clientService = clie;
        this.startDateService = start;
        this.endDateService = end;
        this.costService = cos;
        this.stateService = stat;
    }
}
exports.default = Service;

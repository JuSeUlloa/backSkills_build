"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bill {
    constructor(name, desc, val, date, cat) {
        this.nameBill = name;
        this.descriptionBill = desc;
        this.valueBill = val;
        this.dateBill = date;
        this.codCategory = cat;
    }
}
exports.default = Bill;

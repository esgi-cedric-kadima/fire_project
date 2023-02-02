"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eau = void 0;
class Eau {
    constructor() {
        this._ignitable = false;
    }
    get ignitable() {
        return this._ignitable;
    }
    set ignitable(value) {
        this._ignitable = value;
    }
}
exports.Eau = Eau;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Herbe = void 0;
class Herbe {
    constructor() {
        this._ignitable = true;
        this._display = "green";
    }
    get ignitable() {
        return this._ignitable;
    }
    set ignitable(value) {
        this._ignitable = value;
    }
    get display() {
        return this._display;
    }
}
exports.Herbe = Herbe;

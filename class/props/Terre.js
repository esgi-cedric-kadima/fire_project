"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terre = void 0;
class Terre {
    constructor() {
        this._ignitable = true;
        this._display = "brown";
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
exports.Terre = Terre;

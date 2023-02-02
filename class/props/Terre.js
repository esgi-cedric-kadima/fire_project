"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terre = void 0;
class Terre {
    constructor() {
        this._ignitable = true;
    }
    get ignitable() {
        return this._ignitable;
    }
    set ignitable(value) {
        this._ignitable = value;
    }
}
exports.Terre = Terre;

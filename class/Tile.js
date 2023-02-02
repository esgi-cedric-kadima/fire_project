"use strict";
/****************************************************
 *                                                  *
 *          Abstract Tuile (x,y)                    *
 *                                                  *
 ***************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
class Tile {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get private_y() {
        return this._y;
    }
    set private_y(value) {
        this._y = value;
    }
}
exports.Tile = Tile;

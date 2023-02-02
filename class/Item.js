"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const Tile_1 = require("./Tile");
class Item extends Tile_1.Tile {
    constructor(x, y, affichage, terrainType) {
        super(x, y);
        this._affichage = affichage;
        this._terrainType = terrainType;
    }
    get affichage() {
        return this._affichage;
    }
    set affichage(value) {
        this._affichage = value;
    }
    get terrainType() {
        return this._terrainType;
    }
    set terrainType(value) {
        this._terrainType = value;
    }
}
exports.Item = Item;

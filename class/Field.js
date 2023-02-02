"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const Item_1 = require("./Item");
const Terre_1 = require("./Terre");
const simplex_noise_1 = require("simplex-noise");
const alea_1 = __importDefault(require("alea"));
const Herbe_1 = require("./Herbe");
const Eau_1 = require("./Eau");
class Field {
    constructor(size) {
        let smoothness = 20;
        this._tiles = [];
        const noise2D = (0, simplex_noise_1.createNoise2D)((0, alea_1.default)('seed'));
        // Génération de la hauteur à l'aide de bruit de Perlin
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let value = noise2D(i / smoothness, j / smoothness);
                if (value < -0.5) {
                    this._tiles.push(new Item_1.Item(j, i, true, new Herbe_1.Herbe()));
                }
                else if (value >= -0.5 && value < 0.5) {
                    this._tiles.push(new Item_1.Item(j, i, true, new Terre_1.Terre()));
                }
                else {
                    this._tiles.push(new Item_1.Item(j, i, true, new Eau_1.Eau()));
                }
            }
        }
    }
    get tiles() {
        return this._tiles;
    }
}
exports.Field = Field;

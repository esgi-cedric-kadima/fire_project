import {Item} from "./Item";
import {Terre} from "./props/Terre";
import {createNoise2D} from 'simplex-noise';
import Alea from 'alea';
import {Herbe} from "./props/Herbe";
import {Eau} from "./props/Eau";

/**
 * Cette classe représente le terrain de notre simulation.
 * Elle utilise un bruit de Perlin pour générer la hauteur et déterminer le type de terrain sur chaque case (eau, herbe, terre).
 * La classe utilise également les classes Item, Terre, Herbe et Eau pour créer des objets de type terrain pour chaque case.
 * La classe dispose aussi d'un getter tiles qui retourne l'ensemble des tuiles générées pour le terrain.
 * */

export class Field {
    private _tiles: Array<any>;

    constructor(size: number) {
        const smoothness = 20;
        this._tiles = [];
        const noise2D = createNoise2D(Alea('randomSeed'));

        // Génération de la hauteur à l'aide de bruit de Perlin
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const value = noise2D(i / smoothness, j / smoothness);
                if (value < -0.5) {
                    this._tiles.push(new Item(j, i, new Terre()))
                } else if (value >= -0.5 && value < 0.5) {
                    this._tiles.push(new Item(j, i, new Herbe()))
                } else {
                    this._tiles.push(new Item(j, i, new Eau()))
                }
            }
        }
    }


    get tiles() {
        return this._tiles;
    }
}


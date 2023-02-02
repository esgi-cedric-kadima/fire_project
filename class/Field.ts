import {Tile} from "./Tile";
import {Item} from "./Item";

/**
 * Il s'agit d'une définition de classe en TypeScript pour une classe Field.
 * La classe a un champ privé _tiles pour stocker un tableau de tuiles.
 */
export class Field {

    /**
     * Elle a un constructeur qui prend deux paramètres width et height et construit un terrain aléatoire en utilisant ces dimensions.
     * Le terrain est construit en bouclant sur les valeurs width et height et en créant de nouveaux objets Item avec des coordonnées j et i et en les ajoutant au tableau _tiles.
     */
    constructor(width: number, height: number) {
        this._tiles = [];
        //Contruit terrain
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                const types = [0, 1]

                const type = Math.floor(Math.random() * types.length);
                this._tiles.push(new Item(j, i, false, type));
            }
        }
    }

    /**
     * La classe possède également un getter et un setter pour le champ tiles qui permettent l'accès au tableau privé _tiles.
     */
    private _tiles: Array<Tile>;

    get tiles(): Array<Tile> {
        return this._tiles;
    }

    set tiles(value: Array<Tile>) {
        this._tiles = value;
    }
}
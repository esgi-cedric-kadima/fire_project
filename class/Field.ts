// Classe de la map
import {Tile} from "./Tile";
import {Item} from "./Item";

export class Field {

    constructor(width: number, height: number) {
        this._tiles = [];
        //Contruit terrain
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const types = [0,1]

                const type = Math.floor(Math.random() * types.length);
                this._tiles.push(new Item(i,j,false, type));
            }
        }
    }

    private _tiles: Array<Tile>;

    get tiles(): Array<Tile> {
        return this._tiles;
    }

    set tiles(value: Array<Tile>) {
        this._tiles = value;
    }

    
}
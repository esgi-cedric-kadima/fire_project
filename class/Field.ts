// Classe de la map
import {Tile} from "./Tile";
import {Item} from "./Item";

export class Field {

    constructor(width: number, height: number) {
        this._tiles = [];
        //Contruit terrain
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log("sonarqubemescouilles");
                // let item = new Item("herbe", "#", true);
                // this._tiles.push(new Tile(i,j,false, item));
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
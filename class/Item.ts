import {Tile} from "./Tile";
import {Herbe} from "./Herbe";
import {Eau} from "./Eau";

export class Item extends Tile{
    private _affichage : boolean;
    private _terrainType: Herbe | Eau

    // @ts-ignore
    constructor(x :number, y :number, affichage: boolean, terrainType: Herbe | Eau) {
        super( x, y);
        this._affichage = affichage;
        this._terrainType = terrainType
 }


    get affichage(): boolean {
        return this._affichage;
    }

    set affichage(value: boolean) {
        this._affichage = value;
    }

    get terrainType(): Herbe | Eau {
        return this._terrainType;
    }


    set terrainType(value: Herbe | Eau) {
        this._terrainType = value;
    }
}
import {Tile} from "./Tile";


export class Item extends Tile{
    private _affichage : boolean;
    private _terrainType: any

    constructor(y :number, x :number, affichage: boolean, terrainType: any) {
        super(y,x);
        this._affichage = affichage;
        this._terrainType = terrainType
 }


    get affichage(): boolean {
        return this._affichage;
    }

    set affichage(value: boolean) {
        this._affichage = value;
    }

    get terrainType(): any {
        return this._terrainType;
    }


    set terrainType(value: any) {
        this._terrainType = value;
    }
}
import {Tile} from "./Tile";


export class Item extends Tile{
    private _affichage : boolean;
    private _terrainType: any

    constructor( x :number,y :number, affichage: boolean, terrainType: any) {
        super(x,y);
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
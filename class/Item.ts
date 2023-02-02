import {Tile} from "./Tile";


export class Item extends Tile{
    private _terrainType: any

    constructor( x :number,y :number, terrainType: any) {
        super(x,y);
        this._terrainType = terrainType
    }

    get terrainType(): any {
        return this._terrainType;
    }


    set terrainType(value: any) {
        this._terrainType = value;
    }
}
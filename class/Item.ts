import {Tile} from "./Tile";

/**
 * La classe Item hérite de la classe Tile et représente un élément dans le terrain.
 * Elle contient des informations sur la position (x, y) d'un élément et son type de terrain.
 */
export class Item extends Tile{
    private _terrainType: any

    /**
     * Le constructeur prend en entrée la position x et y de l'élément ainsi que le type de terrain terrainType.
     * Il appelle également le constructeur parent Tile pour définir la position.
     */
    constructor( x :number,y :number, terrainType: any) {
        super(x,y);
        this._terrainType = terrainType
    }

    /**
     * Cette méthode retourne le type de terrain associé à cet élément.
     */
    get terrainType(): any {
        return this._terrainType;
    }

    /**
     * Cette méthode définit le type de terrain associé à cet élément en utilisant la valeur value.
     */
    set terrainType(value: any) {
        this._terrainType = value;
    }
}
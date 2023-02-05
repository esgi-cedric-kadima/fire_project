/**
 * Cette classe représente une tuile générique avec des coordonnées X et Y.
 * Elle est déclarée comme abstraite et peut être étendue pour créer des tuiles spécifiques.
 * Les propriétés X et Y sont privées et peuvent être obtenues et définies via les méthodes get et set.
 */
export abstract class Tile{
    /** La propriété x représente la coordonnée x de la tuile. */
    private _y : number;
    /** La propriété y représente la coordonnée y de la tuile. */
    private _x : number;

    /** Le constructeur prend en entrée la position x et y de la tuile. */
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }
    

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}
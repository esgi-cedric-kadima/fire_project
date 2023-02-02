/***********************************************************************************************************************
 *                                                                                                                      *
 *     Cette classe est abstraite et ne peut pas être instanciée.                                                       *
 *     Elle est utilisée pour définir les propriétés communes à toutes les classes de tuiles.                           *
 *     La classe a deux champs privés _x et _y pour stocker les coordonnées x et y d'une tuile respectivement.          *
 *     La classe possède également des getters et setters pour x et private_y qui permettent l'accès aux champs privés. *
 *                                                                                                                      *
 ***********************************************************************************************************************/

Il s'agit d'une définition de classe en TypeScript pour une classe Tile.                                         *
export abstract class Tile {
    private _x: number;
    private _y: number;

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

    get private_y(): number {
        return this._y;
    }

    set private_y(value: number) {
        this._y = value;
    }
}
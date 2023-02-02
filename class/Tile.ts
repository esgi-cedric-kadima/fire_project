export abstract  class Tile{
    private _x : number;
    private _y : number;

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
import {Item} from "./Item";

export class Herbe{
    private _ignitable = true;

    constructor(ignitable: boolean) {
        this._ignitable = ignitable;
    }
    get ignitable(): boolean {
        return this._ignitable;
    }

    set ignitable(value: boolean) {
        this._ignitable = value;
    }
}
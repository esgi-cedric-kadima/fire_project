import {Item} from "../Item";

export class Terre {
    private _ignitable = true;
    private _display = "brown";
    constructor() {
       
    }
    get ignitable(): boolean {
        return this._ignitable;
    }

    set ignitable(value: boolean) {
        this._ignitable = value;
    }
    get display(){
        return this._display;
    }
}
import {Item} from "../Item";

export class Eau{
    private _ignitable = false;
    private _display = "blue";
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
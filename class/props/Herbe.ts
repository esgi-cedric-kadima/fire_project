import {Item} from "../Item";

export class Herbe{
    private _ignitable = true;
    private _display = "green";

    constructor(){
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
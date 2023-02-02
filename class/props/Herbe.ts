
export class Herbe{
    private _ignitable = true;
    private _display = "green";

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

export class Terre {
    private _ignitable = true;
    private _display = "brown";

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
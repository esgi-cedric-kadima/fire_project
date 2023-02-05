/**
 * Cette classe représente les propriétés de l'herbe. Elle a deux propriétés, ignitable et display.
 * */
export class Herbe{
    /** ignitable est une propriété booléenne qui indique si l'herbe est inflammable ou non. */
    private _ignitable = true;
    /** display est une propriété qui indique la couleur de l'herbe. */
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
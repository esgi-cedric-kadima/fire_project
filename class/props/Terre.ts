/**
 * Cette classe représente les propriétés de type terre. Elle a deux propriétés, ignitable et display.
 */
export class Terre {
    /** ignitable est une propriété booléenne qui indique si la terre est inflammable ou non. */
    private _ignitable = true;
    /** display est une propriété qui indique la couleur de la terre. */
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
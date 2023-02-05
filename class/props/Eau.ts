/**
 * Cette classe représente les propriétés de l'eau. Elle a deux propriétés, ignitable et display.
 */
export class Eau{
    /** ignitable est une propriété booléenne qui indique si l'eau est inflammable ou non. */
    private _ignitable = false;
    /** display est une propriété qui indique la couleur de l'eau. */
    private _display = "blue";

    /** Cette méthode retourne la valeur de la propriété ignitable. */
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
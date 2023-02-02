
import {Item} from "./Item";
import { Terre } from "./props/Terre";
import { createNoise2D } from 'simplex-noise';
import Alea from 'alea';
import { Herbe } from "./props/Herbe";
import { Eau } from "./props/Eau";

export class Field {
    private _tiles: Array<any>;
    constructor(size: number) {
        let smoothness = 20;
        this._tiles = [];
        const noise2D = createNoise2D(Alea('seed'));

        // Génération de la hauteur à l'aide de bruit de Perlin
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let value = noise2D(i / smoothness, j / smoothness);
                if(value < -0.5){
                    this._tiles.push(new Item(j,i,true,new Terre()))
                }else if (value >= -0.5 && value < 0.5){
                    this._tiles.push(new Item(j,i,true,new Herbe()))
                }else{
                    this._tiles.push(new Item(j,i,true,new Eau()))
                }
            }
        }
    }


    get tiles(){
        return this._tiles;
    }
}


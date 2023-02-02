"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = require("./class/Field");
const size = 100;
const field = new Field_1.Field(size);
console.log(field);
//Création de la table
let table = document.createElement("table");
for (let i = 0; i < size; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
    table.appendChild(row);
}
//Ajout de notre affichage
field.tiles.forEach((tile) => {
    let cellule = table.rows[tile.x].cells[tile.y];
    cellule.style.backgroundColor = tile.terrainType.display;
    //Pour pouvoir foutre le feu où on veut
    cellule.addEventListener('click', (e) => {
        cellule.style.backgroundColor = "red";
        console.log("x:" + tile.x + " y :" + tile.y);
    });
});
// Ajout du tableau à la page HTML
document.body.appendChild(table);

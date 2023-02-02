"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = require("./class/Field");
const size = 10;
const field = new Field_1.Field(size);
console.log(field);
const elemntterrain = document.getElementById("terrain");
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
field.tiles.forEach((tile) => {
    table.rows[tile.x].cells[tile.y].appendChild(tile);
});
// Ajout du tableau à la page HTML
document.body.appendChild(table);

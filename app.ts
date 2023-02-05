import {Field} from "./class/Field";

const size = 100;

const field = new Field(size);
console.log(field)

//Création de la table
const table = document.createElement("table");
for (let i = 0; i < size; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < size; j++) {
    const cell = document.createElement("td");    
    row.appendChild(cell);
  }
  table.appendChild(row);
}
//Ajout de notre affichage
field.tiles.forEach((tile)=>{ 
    const cellule = table.rows[tile.x].cells[tile.y];
    cellule.style.backgroundColor = tile.terrainType.display;
    //Pour pouvoir foutre le feu où on veut
    //Ajouter l'event que sur les cellules combustibles
    cellule.addEventListener('click', ()=>{
        cellule.style.backgroundColor = "red";
        console.log("x:"+tile.x + " y :" + tile.y);
    });
});

// Ajout du tableau à la page HTML
document.body.appendChild(table);


"use strict";
function generateField() {
    const table = document.createElement('table');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        // Loop through the cells in each row
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.innerHTML = '0';
            row.appendChild(cell);
        }
        // Add the row to the table
        table.appendChild(row);
    }
    // Add the table to the body of the HTML document
}

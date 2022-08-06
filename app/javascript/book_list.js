import { CountTableRows } from './utils.js';


const rowsTotal = CountTableRows("books-table");
console.log(rowsTotal);
const totalLabel = document.getElementById('rows-total');
totalLabel.innerHTML = `${rowsTotal}`;

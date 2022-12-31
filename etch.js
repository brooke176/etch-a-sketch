//create grid
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', 
  e => e.target.classList.add('my-color-class')
)
  };
};
//prompt user for grid size
function setSize() {
    let gridSize = prompt("How many rows?")
    if (gridSize > 100) {
        alert("ERROR!")
    }
    else {makeRows(gridSize, gridSize)
} }
const gridContainer = document.getElementById("grid-container");
const root = document.querySelector("root");
let gridCell = document.getElementById("gridCell");

console.log(gridContainer);
console.log(gridCell);

// Function that makes the grid
function makeG(rowNum, colNum){
    for (let i = 0; i < (rowNum * colNum); i++){
        let gridCell = document.createElement('div');
        gridCell.innerHTML = "" + i;
        gridContainer.appendChild(gridCell).id = "gridCell";
    };
};

// gridCell.addEventListener("click", ()=>{
//     gridCell.style.color = "#C6E2FF";
// });
makeG(16,16);

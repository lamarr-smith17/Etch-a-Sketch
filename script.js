const gridContainer = document.getElementById("grid-container");
const root = document.querySelector("root");
let gridCell = document.getElementById("gridCell");
let gridClass = document.getElementsByClassName("gridCell");

// Function that makes the grid
function makeG(rowNum, colNum){
    for (let i = 0; i < (rowNum * colNum); i++){
        let gridCell = document.createElement('div');
        gridContainer.appendChild(gridCell).id = "gridCell";
        gridCell.innerHTML = i;
        gridCell.classList = "gridCell" + i;
    };
};

// function changeColor(){
//     gridCell.style.backgroundColor = "red";
// };
// changeColor();
// for (let q = 0; q < gridClass.length;){
//     gridCell.addEventListener("mouseover", changeColor());
// };



makeG(16,16);

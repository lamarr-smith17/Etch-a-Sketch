const gridContainer = document.getElementById("grid-container");
const root = document.querySelector("root");
const clearGridBtn = document.querySelector("#clear-btn");
const test = document.querySelector(".test");
// Function that makes the grid
function makeG(rowNum, colNum){
    for (let i = 0; i < (rowNum * colNum); i++){
        let gridCell = document.createElement('div');
        gridContainer.appendChild(gridCell).id = "gridCell";   
    };
    let gridCellSelector = document.querySelectorAll("#gridCell"); // Selects all of the gridCell ID's and puts them into an array
    gridCellSelector.forEach(changeColor); // For each element that has the ID of gridCell, the changeColor function is applied
};

function changeColor(gridCellSelector){
    gridCellSelector.addEventListener('mouseover', (changeColor) =>{
        changeColor.target.classList.add("colorChange");
    })
};

function clearGrid(){
    let clearClass = document.querySelectorAll('.colorChange');
    for (let i = 0; i < clearClass.length; i++){
       clearClass[i].classList.remove('colorChange');
    }
    gridPrompt();
};
function gridPrompt(){
    let userRows = prompt("How many rows would you like in the grid?");
    let userCols = prompt("How many columns would you like in the grid?");
    test.innerHTML = userRows + "," + userCols;
}
clearGridBtn.addEventListener('click', clearGrid);

makeG(16,16);

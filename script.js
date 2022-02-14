const gridContainer = document.getElementById("grid-container");
const root = document.querySelector("root");
const clearGridBtn = document.querySelector("#clear-btn");

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


let clear = document.querySelector('div');

function clearGrid(){
    let clearClass = document.querySelectorAll('div#gridCell');
    console.log(clearClass);
    if (clearClass == document.querySelectorAll('div.colorChange')){
        console.log('hi');
    }
    // clear.classList.remove('colorChange');
};
clearGridBtn.addEventListener('click', clearGrid);

makeG(16,16);

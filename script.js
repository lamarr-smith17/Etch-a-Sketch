const gridContainer = document.getElementById("grid-container");
const clearGridBtn = document.querySelector("#clear-btn");
const rainbowBtn = document.querySelector('#rainbow-btn');
const blackBtn = document.querySelector('#black-btn');
let root = document.querySelector('#grid-container');
// Function that makes the grid

function makeG(squareNum){
    for (let i = 0; i < (squareNum * squareNum); i++){
        let gridCell = document.createElement('div');
        gridContainer.appendChild(gridCell).id = "gridCell";
    };
    let gridCellSelector = document.querySelectorAll("#gridCell"); // Selects all of the gridCell ID's and puts them into an array
    gridCellSelector.forEach(changeColor); // For each element that has the ID of gridCell, the changeColor function is applied
};

function changeColor(gridCellSelector){
    gridCellSelector.addEventListener('mouseover', (changeColor) =>{
        gridCellSelector.style.backgroundColor = 'black';
        changeColor.target.classList.add("colorChange");
    });
};


function clearGrid(){
    let clearClass = document.querySelectorAll('.colorChange');
    for (let i = 0; i < clearClass.length; i++){
       clearClass[i].classList.remove('colorChange');
    };
    gridPrompt();
};

function gridPrompt(){
    let gridCell = document.querySelectorAll('#gridCell');
    gridCell.forEach(gridCell => gridCell.remove()); // For each element that has the ID of gridCell, it is removed
    squareNum = prompt("How big would you like to the grid to be? (Row x Column)");
    while (squareNum >= 100 || squareNum == 0||squareNum == ""){ // Validation loop
        squareNum = prompt("The grid cannot be 100 x 100 nor empty. Please enter a new value");
    };
    root.style.setProperty('--squareNum', squareNum); /* Sets the property of squareNum to the user input 
    which changes the CSS variable so the grid row and cols templates update*/  
    makeG(squareNum);
};

makeG(16); // Starting grid size
clearGridBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', changeColor);
 blackBtn.addEventListener('click', ()=>{
    console.log('i work');
});




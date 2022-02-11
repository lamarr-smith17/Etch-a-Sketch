const gridContainer = document.getElementById("grid-container");
const root = document.querySelector("root");
let gridCell = document.getElementsByClassName("gridCell");

// Function that makes the grid
function makeG(rowNum, colNum){
    for (let i = 0; i < (rowNum * colNum); i++){
        let gridCell = document.createElement('div');
        gridContainer.appendChild(gridCell).id = "gridCell";
        gridCell.classList = "gridCell" + i;
    };
};
// console.log(gridCell.length);


// for (let l = 0; l < gridCell.length; l++){
//         let newColor = gridCell.item[0];
// }
makeG(16,16);

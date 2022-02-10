const gridContainer = document.getElementById("container");
let gridRow =  document.getElementById("gridRow");
// Function that makes the rows
function makeGrid(rowNum,colNum)
{
    for (let r = 0; r < rowNum; r++){
        let gridRow = document.createElement("div");
        gridContainer.appendChild(gridRow).id = "gridRow";

        for (let c = 0; c < colNum; c++){
            let gridCell = document.createElement("div");
            gridContainer.appendChild(gridCell).id = "gridCell";
        };
    };
};

function sampleGrid(){
    makeGrid(16,16);
};
sampleGrid();
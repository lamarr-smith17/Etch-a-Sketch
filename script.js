const gridContainer = document.getElementsByClassName("container");


// Function that makes the rows
function makeRows(rowNum)
{
    for (let r = 0; r < rowNum; r++){
        let gridRow = document.createElement('div');
        gridContainer.appendChild(gridRow).className = "gridRow";
    };
};

// Function that creates the colums
function makeCols (colNum)
{
    for (let i = 0; i < gridRow.length; i++){
        for (let c = 0; c < colNum; c++){
            let gridCol = document.createElement('div');
            gridRow.appendChild(gridCol).className = "gridCol";
        };
    };
};

makeRows(16);
makeCols(16);
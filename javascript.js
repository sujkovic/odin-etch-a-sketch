let grid = document.querySelector('.grid');
let blockSize;


function resizeGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    blockSize = Math.floor(720/size);
    console.log(blockSize);
    for (let i = 0; i < (size**2); i++) {
        let block = document.createElement('div');
        block.classList.add('pixel');
        block.setAttribute('style', `width: ${blockSize}px; height: ${blockSize}px; background-color: white; flex-shrink: 0;`);
        grid.appendChild(block);
    }
    createBlocks();
}

function clickBlock(div) {
    div.setAttribute('style', `width: ${blockSize}px; height: ${blockSize}px; background-color: black;`);
}

function createBlocks() {
    let blocks = document.querySelectorAll('.pixel');          
    blocks.forEach((block) => {
        block.addEventListener("mouseover", function(e){
            if(e.buttons == 1 || e.buttons == 3){
                clickBlock(block);           
            }
        });
    });
}

resizeGrid(64);         //  default value
                                                    //taking input from slider
var slider = document.getElementById("myRange");    
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
  resizeGrid(this.value);
}
                                                    //reset button
let resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => resizeGrid(64));
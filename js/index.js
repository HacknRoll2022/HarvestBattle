const width = 10;
const user1Grid = document.querySelector('.grid-user1');
const user1Squares = []
const plants = ['', 'carrot_plant.png','carrot_grow.png','carrot_rot.png','radish_plant.png','radish_grow.png','radish_rot.png']
//create board
function createBoard(grid, squares) {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div')
        square.className = "square"
        square.dataset.id = i;
        square.dataset.state = Math.floor(Math.random() * 2)%2?1:4; //either carrot or radish
        console.log(square)
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard(user1Grid, user1Squares)


// var grid = document.getElementsByClassName('square');

Array.from(user1Squares).forEach(v => v.addEventListener('click', function () {
    v.style.backgroundImage = 'url(assets/' + plants[v.dataset.state] + ')';
    console.log(v.dataset.state)
    console.log(v.style.backgroundImage)


    if(v.dataset.state==0){
        v.dataset.state= Math.floor(Math.random() * 2)%2?1:4; //either carrot or radish
        console.log(v.dataset.state)
    }else if(v.dataset.state<3){
        v.dataset.state = (v.dataset.state==1)?2:((v.dataset.state==2)?3:0);
    }else{
        v.dataset.state = (v.dataset.state==4)?5:((v.dataset.state==5)?6:0);
    }

}));




// ///////////////////////////////////////////////////https://github.com/fahadhaidari/game-code-bites/blob/master/grid-based-system/index.js//////////////////////////////////////////////
// class GridSystem {
//     constructor(matrix) {
//         this.matrix = matrix;
//         this.uiContext = this.#getContext(420, 580, "#000");
//         this.outlineContext = this.#getContext(0, 0, "#444");
//         this.topContext = this.#getContext(0, 0, "#111", true);
//         this.cellSize = 40;
//         this.padding = 2;
//     }

//     #getCenter(w, h) {
//         return {
//             x: window.innerWidth / 2 - w / 2 + "px",
//             y: window.innerHeight / 2 - h / 2 + "px"
//         };
//     }

//     #getContext(w, h, color = "#111", isTransparent = false) {
//         this.canvas = document.createElement("canvas");
//         this.context = this.canvas.getContext("2d");
//         this.width = this.canvas.width = w;
//         this.height = this.canvas.height = h;
//         this.canvas.style.position = "absolute";
//         this.canvas.style.background = color;
//         if (isTransparent) {
//             this.canvas.style.backgroundColor = "transparent";
//         }
//         const center = this.#getCenter(w, h);
//         this.canvas.style.marginLeft = center.x
//         this.canvas.style.marginTop = center.y;
//         document.body.appendChild(this.canvas);

//         return this.context;
//     }

//     render() {
//         const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
//         const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

//         this.outlineContext.canvas.width = w;
//         this.outlineContext.canvas.height = h;

//         const center = this.#getCenter(w, h);
//         this.outlineContext.canvas.style.marginLeft = center.x
//         this.outlineContext.canvas.style.marginTop = center.y;

//         this.topContext.canvas.style.marginLeft = center.x
//         this.topContext.canvas.style.marginTop = center.y;

//         for (let row = 0; row < this.matrix.length; row++) {
//             for (let col = 0; col < this.matrix[row].length; col++) {
//                 this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "#4488FF" : (this.matrix[row][col]==0? "#111": 'purple');
//                 this.outlineContext.fillRect(col * (this.cellSize + this.padding),
//                     row * (this.cellSize + this.padding),
//                     this.cellSize, this.cellSize);
//             }
//         }

//         this.uiContext.font = "20px Courier";
//         this.uiContext.fillStyle = "white";
//         this.uiContext.fillText("Grid Based System", 20, 30);
//     }
// }

// const gridMatrix = [
//     [1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1],
//     [1, 0, 0, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1]
// ];

// const gridSystem = new GridSystem(gridMatrix);

// gridSystem.render();

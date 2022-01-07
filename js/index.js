// document.addEventListener('DOMContentLoaded', () => {
//     const user1Grid = document.querySelector('.grid-user1');
//     const user2Grid = document.querySelector('.grid-user2');
//     const displayGrid = document.querySelector('.grid-display');
//     const plants = document.querySelectorAll('.plant');
//     const flower = document.querySelector('.flower-container');
//     const user1Squares = []
//     const user2Squares = []

    const width = 10;
//     //create board
//     function createBoard(grid, squares) {
//         for (let i = 0; i < width * width; i++) {
//             const square = document.createElement('div')
//             square.dataset.id = i;
//             grid.appendChild(square)
//             squares.push(square)

//         }
//     }

//     createBoard(user1Grid, user1Squares)
//     createBoard(user2Grid, user2Squares)

//     //plants
//     const plantArray = [
//         {
//             name: 'flower',
//             directions: [
//                 [0, 1],
//                 [0, width]
//             ]
//         }
//     ]

//     //draw the player2 flowers at random locations
//     function generate(plant){
//         let randomDirection = Math.floor(Math.random() * plantArray.direction.length)
//         let current = plant.directions(randomDirection)
//         if(randomDirection==0) direction=1
//         if(randomDirection ==1) direction = 10

//         const isTaken = current.some(index => user2Squares[randomStart +index].classList.contains('taken'))

//         if(!isTaken) current.array.forEach(index => user2Squares[randomStart + index].classList.add('taken', plant.name))

//         else generate(plant)

//     }

//     generate(plantArray[0])

// })

    const user1Grid = document.querySelector('.grid-user1');
    const user1Squares = []


    //create board
    function createBoard(grid, squares) {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.className = "square"
            square.dataset.id = i;
            grid.appendChild(square)
            squares.push(square)

        }
    }

    createBoard(user1Grid, user1Squares)


var grid = document.getElementsByClassName('square');

Array.from(grid).forEach(v => v.addEventListener('click', function() {
  v.style.background = 'black';
}));

///////////////////////////////////////////////////https://github.com/fahadhaidari/game-code-bites/blob/master/grid-based-system/index.js//////////////////////////////////////////////
class GridSystem {
	constructor(matrix) {
		this.matrix = matrix;
		this.uiContext = this.#getContext(420, 580, "#000");
		this.outlineContext = this.#getContext(0, 0, "#444");
		this.topContext = this.#getContext(0, 0, "#111", true);
		this.cellSize = 40;
		this.padding = 2;
	}

	#getCenter(w, h) {
		return {
			x: window.innerWidth / 2 - w / 2 + "px",
			y: window.innerHeight / 2 - h / 2 + "px"
		};
	}

	#getContext(w, h, color = "#111", isTransparent = false) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width = w;
		this.height = this.canvas.height = h;
		this.canvas.style.position = "absolute";
		this.canvas.style.background = color;
		if (isTransparent) {
			this.canvas.style.backgroundColor = "transparent";
		}
		const center = this.#getCenter(w, h);
		this.canvas.style.marginLeft = center.x
		this.canvas.style.marginTop = center.y;
		document.body.appendChild(this.canvas);

		return this.context;
	}

	render() {
		const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
		const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

		this.outlineContext.canvas.width = w;
		this.outlineContext.canvas.height = h;

		const center = this.#getCenter(w, h);
		this.outlineContext.canvas.style.marginLeft = center.x
		this.outlineContext.canvas.style.marginTop = center.y;

		this.topContext.canvas.style.marginLeft = center.x
		this.topContext.canvas.style.marginTop = center.y;

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "#4488FF" : "#111";
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);
			}
		}

		this.uiContext.font = "20px Courier";
		this.uiContext.fillStyle = "white";
		this.uiContext.fillText("Grid Based System", 20, 30);
	}
}

const gridMatrix = [
	[1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 1, 0, 1],
	[1, 0, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1]
];

const gridSystem = new GridSystem(gridMatrix);
gridSystem.render();

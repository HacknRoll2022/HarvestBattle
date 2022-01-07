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

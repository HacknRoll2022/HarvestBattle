const width = 10;
const user1Grid = document.querySelector('.grid-user1');
const user1Squares = []
const plants = ['', 'carrot_plant.png','carrot_grow.png','carrot_rot.png','radish_plant.png','radish_grow.png','radish_rot.png']
const p1Score = document.getElementById('p1_score');
const p2Score = document.getElementById('p2_score');
const p1Turn = document.getElementById('player1_turn');
const p2Turn = document.getElementById('player2_turn');

var playerTurn = 0;
//create board
function createBoard(grid, squares) {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div')
        square.className = "square"
        square.dataset.id = i;
        square.setAttribute('id', 'sq' + i);
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

    updatePlayerTurn();


}));

// Highlight squares
Array.from(user1Squares).forEach(v => v.addEventListener('mouseover', function () {
    var indicator = parseInt(v.dataset.id);

    var btns = document.querySelectorAll('.action_button');
    var action = "";

    [].forEach.call(btns, function(btns) {
        if (btns.dataset.selected == 1) {
            action = btns.id;
        }
    })

    var idx = plant(indicator,action);

    // Array.from(user1Squares).forEach(v => {
    //     if (v.dataset.id in idx) {

    //     }
    // }


    [].forEach.call(idx, function(idx) {
        var element = document.getElementById('sq' + idx);
        element.classList.add("highlight");
    })

    console.log(idx.toString());


}));

// Highlight squares
Array.from(user1Squares).forEach(v => v.addEventListener('mouseleave', function () {
    var indicator = parseInt(v.dataset.id);

    var btns = document.querySelectorAll('.action_button');
    var action = "";

    [].forEach.call(btns, function(btns) {
        if (btns.dataset.selected == 1) {
            action = btns.id;
        }
    })

    var idx = plant(indicator,action);

    [].forEach.call(idx, function(idx) {
        var element = document.getElementById('sq' + idx);
        element.classList.remove("highlight");
    })

}));

// SELECT ACTION
document.querySelectorAll('.action_button').forEach(b => b.addEventListener('click', function () {
        console.log(b.id);

        var btnID = b.id;
        var btn = document.querySelector('#' + btnID);

        // reset all other buttons
        var btns = document.querySelectorAll('.action_button');
        [].forEach.call(btns, function(btns) {
            btns.dataset.selected = 0;
            btns.style.backgroundColor = "#2ec4ff";
        });
        
        btn.dataset.selected = 1;
        btn.style.backgroundColor = '#004AAD';
    })
)

function plant(coordinate, action){
    const points = new Array();

    if(action == "p1"){
        var offset = [[-11,-10,-9],[-1,0,1],[9,10,11]];
        offset.forEach(o => {
            tens = Math.floor((coordinate + o[1]) / 10)
            o.forEach(n => {
                var val = coordinate + n;
                if ((Math.floor(val/10) == tens) && (val >= 0 && val < 100)) {
                    points.push(val);
                }
            })
        })
        return points;
    }
    if(action == "p2"){
        var offset = [-40,-30,-20,-10,0,10,20,30,40];
        offset.forEach(o => {
            var val = coordinate + o;
            if (val >= 0 && val < 100) {
                points.push(val);
            }
        })
        return points;
    }
    if(action == "p3"){
        var offset = [-4,-3,-2,-1,0,1,2,3,4];
        offset.forEach(o => {
            var val = coordinate + o;
            if (val >= 0 && val < 100) {
                tens = Math.floor(coordinate / 10)
                if (Math.floor(val / 10) == tens) {
                    points.push(val);
                }
            }
        })
        return points;
    }
    if(action == "h1"){
        var offset = [[-10, -9], [0, 1]];
        offset.forEach(o => {
            tens = Math.floor((coordinate + o[0]) / 10)
            o.forEach(n => {
                var val = coordinate + n;
                if ((Math.floor(val/10) == tens) && (val >= 0 && val < 100)) {
                    points.push(val);
                }
            })
        })
        return points;
    }
    if(action == "h2"){
        var offset = [0,10,20,30]

        offset.forEach(o => {
            if (coordinate + o < 100) {
                points.push(coordinate + o)
            }
        })
    }
    if(action == "h3"){

        var offset = [0,1,2,3];
        offset.forEach(o => {
            var val = coordinate + o;
            if (val >= 0 && val < 100) {
                points.push(val);
            }
        })

        return points;
    }
    if(action == "s1"){
        var offsetVert = [-10, 0, 10];
        offsetVert.forEach(o => {
            var val = coordinate + o;
            if (val >= 0 && val < 100) {
                points.push(val)
            }
        })
        var offsetHoriz = [-1, 1];
        var tens = Math.floor((coordinate) / 10)
        offsetHoriz.forEach(o => {
            var val = coordinate + o;
            if (Math.floor(val/10) == tens) {
                points.push(val);
            }
        })
        return points;

    }
    if(action == "s2"){
        points.push(coordinate);

        var offset = [[-11,-9],[9,11]];
        offset.forEach(o => {
            tens = Math.floor((coordinate + (o[1] + o[0])/2) / 10)
            o.forEach(n => {
                var val = coordinate + n;
                if ((Math.floor(val/10) == tens) && (val >= 0 && val < 100)) {
                    points.push(val);
                }
            })
        })
        return points;

    } else {
        points.push(coordinate);
        return points
    }
}

function updateScore(){
    //if(player)
}

function updatePlayerTurn(){
    playerTurn = (playerTurn)?0:1;
    p1Turn.style.display = (playerTurn)?'block':'none';
    p2Turn.style.display = (playerTurn)?'none':'block';
}
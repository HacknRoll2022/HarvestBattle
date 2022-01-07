const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('<h1>Farm Wars</h1>');
});




const { initGame } = require('./game');
const { makeid } = require('./utils');


// const state = {}; // stores the game states in dict with key being room name (shortform)
// const clientRooms = {}; // stores roomnames in dict with the long client.id provided by sockets as key

// /////////////////////////////////////////////////////////////////////////////////////////////////////

io.on('connection', client => {
  console.log('a user connected');

//   client.on('newGame', handleNewGame);
//   client.on('joinGame', handleJoinGame);
//   client.on('boardUpdate', handleBoardUpdate);

//   // called when the client attemps to join an existing room
//   function handleJoinGame(roomName) {
//     const room = io.sockets.adapter.rooms[roomName];

//     let allUsers;
//     if (room) {
//       allUsers = room.sockets;
//     }

//     let numClients = 0;
//     if (allUsers) {
//       numClients = Object.keys(allUsers).length;
//     }

//     // error handling
//     if (numClients === 0) {
//       client.emit('unknownCode');
//       return;
//     } else if (numClients > 1) {
//       client.emit('tooManyPlayers');
//       return;
//     }

//     clientRooms[client.id] = roomName;

//     client.join(roomName);
//     client.number = 2;
//     client.emit('init', 2);
    
//     startGameInterval(roomName); // TODO: what to replace this with?
//   }

//   // called when client wants to create a new room
//   function handleNewGame() {
//     let roomName = makeid(5);
//     clientRooms[client.id] = roomName;
//     client.emit('gameCode', roomName);

//     state[roomName] = initGame();

//     client.join(roomName);
//     client.number = 1;
//     client.emit('init', 1);
//   }

//   // pass information to the other user after each turn (TODO: allow this function to take in the gamestate json thingy???)
//   function handleBoardUpdate(){
//     // TODO: check if either player has won the game

//     // if a winner is declared (TODO: check win condition)
//     if (true){
//         emitGameOver(roomName, winner);
//         state[roomName] = null;
//         // TODO: maybe remove the client from the clientRoom dict? not done in the example tho
//     } else {
//         // TODO: emit the info recieved to the other player?
//         emitGameState(roomName, state[roomName])
//     }
//   }

});



// function emitGameState(room, gameState) {
//     // Send this event to everyone in the room.
//     io.sockets.in(room)
//         .emit('gameState', JSON.stringify(gameState));
// }

// // tell everyone it is a game over
// function emitGameOver(room, winner) {
//     io.sockets.in(room)
//         .emit('gameOver', JSON.stringify({ winner }));
// }

// // frontend will try to access this i think
server.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});

var gameHeading = document.querySelector('#game-heading');
var gameSpaces = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('button');
var currentPlayer;
var game;
var player1;
var player2;

beginButton.addEventListener('click', startGame);

for (var i = 0; i < gameSpaces.length; i ++) {
  gameSpaces[i].addEventListener('click', displayToken);
}

function startGame() {
  createGame();
  clearBoard();
  displayTurn(currentPlayer);
  assignSpaceId();
}

function createGame() {
  var newPlayer1 = new Player('X');
  var newPlayer2 = new Player('Ｏ');
  game = new Game(newPlayer1, newPlayer2);
  createPlayers(game.player1, game.player2);
}

function createPlayers(player, otherPlayer) {
  player1 = player;
  player2 = otherPlayer;
  toggleTurn();
}

function clearBoard() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerText = '';
  }
}

function toggleTurn() {
  if (player1.isTurn === false) {
    player1.isTurn = true;
    player2.isTurn = false;
    currentPlayer = player1;
  } else if (player1.isTurn === true) {
    player1.isTurn = false;
    player2.isTurn = true;
    currentPlayer = player2;
  }
  displayTurn(currentPlayer);
}

function displayTurn(player) {
  var playerToken = player.token
  gameHeading.innerText = `It's ${playerToken}'s turn!`;
}

function assignSpaceId() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].id = `${i}`;
  }
}

function displayToken(event) {
  var space = event.target;
  if (!space.innerText) {
    space.innerText = currentPlayer.token;
    claimSpaceForPlayer(event);
    game.updateGameBoard(space.id, currentPlayer.token);
    checkGameStatus();
  }
}

function claimSpaceForPlayer(event) {
  var parsedId = parseInt(event.target.id)
  if (currentPlayer === player1) {
    player1.spaces.push(parsedId);
  } else {
    player2.spaces.push(parsedId);
  }

  displayTurn(currentPlayer);
}

function checkGameStatus() {
  var status = game.winGame(currentPlayer);
  if (status) {
    displayMessage(`${currentPlayer.token} wins!`);
    clearBoard();
  } else if (status === 'draw') {
    displayMessage(`It's a tie!`);
    clearBoard();
  } else {
    toggleTurn();
  }
}

function displayMessage(message) {
  gameHeading.innerText = message;
}

// function displayWins() {
//
// }

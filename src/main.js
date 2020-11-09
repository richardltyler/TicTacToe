var gameHeading = document.querySelector('#game-heading');
var gameSpaces = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('button');
var player1wins = document.querySelector('.player-one');
var player2wins = document.querySelector('.player-two');
var currentPlayer;
var game;
var player1 =  new Player('X');
var player2 = new Player('Ｏ');

beginButton.addEventListener('click', startGame);

for (var i = 0; i < gameSpaces.length; i ++) {
  gameSpaces[i].addEventListener('click', claimSpace);
}

function startGame() {
  createGame();
  clearBoard();
  displayTurn(currentPlayer);
  displayWins();
}

function createGame() {
  game = new Game(player1, player2);
  assignSpaceId();
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
  for (var i = 0; i < game.gameBoard.length; i++) {
    gameSpaces[i].id = `${i}`;
  }
}

function claimSpace(event) {
  displayToken(event);
  game.updateGameBoard();
  checkGameStatus();
}

function displayToken(event) {
  var space = event.target;
  if (!space.innerText) {
    space.innerText = currentPlayer.token;
    // game.updateGameBoard(space.id, currentPlayer.token);
    // checkGameStatus();
  }
}

function checkGameStatus() {
  var status = game.winGame(currentPlayer);
  if (status === true) {
    displayMessage(`${currentPlayer.token} wins!`);
    displayWins();
  } else if (status === false) {
    displayMessage(`It's a tie!`);
  } else {
    toggleTurn();
  }
}

function displayMessage(message) {
  gameHeading.innerText = message;
}

function displayWins() {
  player1wins.innerText = `${player1.winCount} WINS`;
  player2wins.innerText = `${player2.winCount} WINS`;
}


// don't forget that you can still add tokens after game has finished

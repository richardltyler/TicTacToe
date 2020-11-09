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
  updateDisplay(gameHeading, `It's ${currentPlayer.token}'s turn!`);
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
  if(currentPlayer === player1 || !currentPlayer) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  updateDisplay(gameHeading, `It's ${currentPlayer.token}'s turn!`);
}

function assignSpaceId() {
  for (var i = 0; i < game.gameBoard.length; i++) {
    gameSpaces[i].id = `${i}`;
  }
}

function claimSpace(event) {
  displayToken(event);
  checkGameStatus();
}

function displayToken(event) {
  var space = event.target;
  if (!space.innerText) {
    space.innerText = currentPlayer.token;
    game.updateGameBoard(space.id, currentPlayer.token);
  }
}

function checkGameStatus() {
  var status = game.winGame(currentPlayer);
  if (status === true) {
    updateDisplay(gameHeading, `${currentPlayer.token} wins!`);
    updateDisplay(player1wins, `${player1.winCount} WINS`);
    updateDisplay(player2wins, `${player2.winCount} WINS`)
  } else if (status === false) {
    updateDisplay(gameHeading, `It's a tie!`);
  } else {
    toggleTurn();
  }
}

function updateDisplay(place, message) {
  place.innerText = message;
}



// don't forget that you can still add tokens after game has finished

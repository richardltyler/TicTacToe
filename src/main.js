var gameHeading = document.querySelector('#game-heading');
var gameSpaces = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('button');
var player1wins = document.querySelector('.player-one');
var player2wins = document.querySelector('.player-two');
var currentPlayer;
var game;
var player1 =  new Player('player1', 'X');
var player2 = new Player('player2', 'Ｏ');

beginButton.addEventListener('click', startGame);

for (var i = 0; i < gameSpaces.length; i ++) {
  gameSpaces[i].addEventListener('click', claimSpace);
}

function startGame() {
  createGame();
  clearBoard();
  updateGameHeading(`It's ${currentPlayer.token}'s turn!`);
  updateWinCountDisplay();
  toggleClickOnSpace('auto');
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
  if(currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  updateGameHeading(`It's ${currentPlayer.token}'s turn!`);
}

function assignSpaceId() {
  for (var i = 0; i < game.gameBoard.length; i++) {
    gameSpaces[i].id = `${i}`;
  }
}

function claimSpace(event) {
  displayToken(event);
  decideNextMove();
}

function displayToken(event) {
  var space = event.target;
  var status = checkGameStatus();
  if (!space.innerText && !status) {
    space.innerText = currentPlayer.token;
    game.updateGameBoard(space.id, currentPlayer.token);
  }
}

function decideNextMove() {
  var status = checkGameStatus();
  if (status === 'win') {
    winGame();
  } else if (status === 'draw') {
    tieGame();
  } else {
    toggleTurn();
  }
}

function checkGameStatus() {
  var status = game.winGame(currentPlayer);
  return status;
}

function winGame() {
  game.saveGameBoardToPlayer(currentPlayer);
  updateGameHeading(`${currentPlayer.token} wins!`);
  updateWinCountDisplay();
  toggleClickOnSpace('none');
  currentPlayer.saveWinsToStorage();
}


function toggleClickOnSpace(newValue) {
  for (var i = 0; i < gameSpaces.length; i++)
  gameSpaces[i].style.pointerEvents = newValue;
}

function tieGame() {
  updateDisplay(gameHeading, `It's a tie!`);
}

function updateGameHeading(message) {
  gameHeading.innerText = message;
}

function updateWinCountDisplay() {
  player1wins.innerText = (`${player1.winCount} WINS`);
  player2wins.innerText = (`${player2.winCount} WINS`);
}

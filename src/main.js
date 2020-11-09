var gameHeading = document.querySelector('#game-heading');
var gameSpaces = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('#new-game');
var player1wins = document.querySelector('.player-one');
var player2wins = document.querySelector('.player-two');
var currentPlayer;
var game;
var player1;
var player2;

window.onLoad = createPlayers(), updateWinCountDisplay();
beginButton.addEventListener('click', startGame);

for (var i = 0; i < gameSpaces.length; i ++) {
  gameSpaces[i].addEventListener('click', claimSpace);
}

function startGame() {
  createGame();
  clearBoard();
  hideButton();
  updateGameHeading(`It's ${currentPlayer.token}'s turn!`);
  updateWinCountDisplay();
  toggleClickOnSpace('auto');
}

function hideButton() {
  beginButton.className = 'inactive-button';
}

function createGame() {
  game = new Game(player1, player2);
  assignSpaceId();
  toggleTurn();
}

function createPlayers() {
  player1 = new Player('player1', 'X');
  player2 = new Player('player2', 'Ｏ');
  player1.retrieveWinsFromStorage();
  player2.retrieveWinsFromStorage();
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
  var status = checkForWin();
  if (!space.innerText && !status) {
    space.innerText = currentPlayer.token;
    game.updateGameBoard(space.id, currentPlayer.token);
  }
}

function decideNextMove() {
  var status = checkForWin();
  var draw = game.tieGame(currentPlayer);
  if (status === 'win') {
    winGame();
  } else if (draw === 'draw') {
    tieGame();
  } else {
    toggleTurn();
  }
}

function checkForWin() {
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
  updateGameHeading(`It's a tie!`);
}

function updateGameHeading(message) {
  gameHeading.innerText = message;
}

function updateWinCountDisplay() {
  player1wins.innerText = (`${player1.winCount} WINS`);
  player2wins.innerText = (`${player2.winCount} WINS`);
}

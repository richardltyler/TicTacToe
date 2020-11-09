var gameHeading = document.querySelector('#game-heading');
var gameBoard = document.querySelector('.game-board');
var gameSpaces = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('#new-game');
var player1wins = document.querySelector('.player-one');
var player2wins = document.querySelector('.player-two');
var game;
var player1;
var player2;

window.onLoad = createPlayers(), updateWinCountDisplay();
beginButton.addEventListener('click', startGame);
gameBoard.addEventListener('click', claimSpace);

function startGame() {
  createGame();
  clearBoard();
  hideButton();
  updateGameHeading(`It's ${game.currentPlayer.token}'s turn!`);
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
  if(game.currentPlayer === game.player1) {
    game.currentPlayer = game.player2;
  } else {
    game.currentPlayer = game.player1;
  }

  updateGameHeading(`It's ${game.currentPlayer.token}'s turn!`);
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
  if (!space.innerText && space.className === 'game-space') {
    space.innerText = game.currentPlayer.token;
    game.updateGameBoard(space.id, game.currentPlayer.token);
  }
}

function decideNextMove() {
  var status = game.winGame(game.currentPlayer);
  var draw = game.tieGame(game.currentPlayer);
  if (status === 'win') {
    winGame();
  } else if (draw === 'draw') {
    tieGame();
  } else {
    toggleTurn();
  }
}


function winGame() {
  game.saveGameBoardToPlayer(game.currentPlayer);
  updateGameHeading(`${game.currentPlayer.token} wins!`);
  updateWinCountDisplay();
  toggleClickOnSpace('none');
  game.currentPlayer.saveWinsToStorage();
  timeOut();
}

function updateGameHeading(message) {
  gameHeading.innerText = message;
}

function updateWinCountDisplay() {
  player1wins.innerText = (`${player1.winCount} WINS`);
  player2wins.innerText = (`${player2.winCount} WINS`);
}

function toggleClickOnSpace(newValue) {
  for (var i = 0; i < gameSpaces.length; i++)
  gameSpaces[i].style.pointerEvents = newValue;
}

function tieGame() {
  toggleClickOnSpace('none');
  updateGameHeading(`It's a tie!`);
  timeOut();
}

function timeOut() {
  window.setTimeout(startGame, 2000);
}

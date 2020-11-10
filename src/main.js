var gameHeading = document.querySelector('#game-heading');
var gameBoard = document.querySelector('.game-board');
var gameSpaces = document.querySelectorAll('.game-space');
var player1wins = document.querySelector('.player-one');
var player2wins = document.querySelector('.player-two');
var game;

window.onLoad = startGame();
gameBoard.addEventListener('click', claimSpace);

function startGame() {
  createGame();
  displayGame();
  updateGameHeading(`It's ${game.currentPlayer.token}'s turn!`);
  updateWinCountDisplay();
  toggleClickOnBoard('auto');
}

function createGame() {
  var player1 = createPlayer('player1', 'X');
  var player2 = createPlayer('player2', 'Ｏ')
  game = new Game(player1, player2);
  assignSpaceId();
  game.decideFirstTurn();
}

function createPlayer(name, token) {
  var newPlayer = new Player(name, token);
  newPlayer.retrieveWinsFromStorage();
  return newPlayer;
}

function assignSpaceId() {
  for (var i = 0; i < game.gameBoard.length; i++) {
    gameSpaces[i].id = `${i}`;
  }
}

function displayGame() {
  for (var i = 0; i < game.gameBoard.length; i++) {
    gameSpaces[i].innerText = game.gameBoard[i];
  }
}

function updateGameHeading(message) {
  gameHeading.innerText = message;
}

function updateWinCountDisplay() {
  player1wins.innerText = (`${game.player1.winCount} WINS`);
  player2wins.innerText = (`${game.player2.winCount} WINS`);
}

function toggleClickOnBoard(newValue) {
  gameBoard.style.pointerEvents = newValue;
}

function claimSpace(event) {
  var space = event.target;
  if (!game.gameBoard[space.id]) {
    game.updateGameBoard(space.id);
    displayGame();
    checkGameStatus();

  }
}

function checkGameStatus() {
  var win = game.checkForWin(game.currentPlayer);
  var draw = game.checkForDraw(game.currentPlayer);
  if (win) {
    winGame();
  } else if (draw) {
    tieGame();
  } else {
    toggleTurn();
  }
}

function winGame() {
  toggleClickOnBoard('none');
  game.saveGameBoardToPlayer(game.currentPlayer);
  updateGameHeading(`${game.currentPlayer.token} wins!`);
  updateWinCountDisplay();
  timeOut();
}

function timeOut() {
  window.setTimeout(startGame, 2000);
}

function tieGame() {
  toggleClickOnBoard('none');
  updateGameHeading(`It's a tie!`);
  timeOut();
}

function toggleTurn() {
    game.toggleTurn();
    updateGameHeading(`It's ${game.currentPlayer.token}'s turn!`);
}

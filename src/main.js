var turnHeading = document.querySelector('#game-heading');
var gameSpaces = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('button');
var currentPlayer;
var player1 = new Player('X', true);
var player2 = new Player('Ｏ', false);
var game;

beginButton.addEventListener('click', startGame);

for (var i = 0; i < gameSpaces.length; i ++) {
  gameSpaces[i].addEventListener('click', displayToken);
}

function startGame() {
  game = new Game(player1, player2);
  currentPlayer = player1;
  clearBoard();
  displayTurn(currentPlayer);
  assignSpaceId();
}

function clearBoard() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].innerText = '';
  }
}

function displayTurn(player) {
  var playerToken = player.token
  turnHeading.innerText = `It's ${playerToken}'s turn!`;
}

function assignSpaceId() {
  for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].id = `${i}`;
  }
}

function displayToken(event) {
  var space = event.target;
  var token = currentPlayer.token;
  if (!space.innerText) {
    space.innerText = token;
    claimSpaceForPlayer(event);
    toggleTurn();
    game.updateGameBoard(space.id, token);
  }
}

function claimSpaceForPlayer(event) {
  var parsedId = parseInt(event.target.id)
  if (currentPlayer === player1) {
    player1.spaces.push(parsedId);
  } else {
    player2.spaces.push(parsedId);
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

function checkForWinner() {
  game.winGame(currentPlayer);
}

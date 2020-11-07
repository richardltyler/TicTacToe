var turnHeading = document.querySelector('#game-heading');
var gameSpace = document.querySelectorAll('.game-space');
var beginButton = document.querySelector('button');
var currentPlayer;
var player1 = new Player('X', true);
var player2 = new Player('Ｏ', false);

beginButton.addEventListener('click', startGame);
for (var i = 0; i < gameSpace.length; i ++) {
  gameSpace[i].addEventListener('click', displayToken);
}

function startGame() {
  var game = new Game(player1, player2);
  currentPlayer = player1;
  displayTurn(currentPlayer);
}

function displayTurn(player) {
  var playerToken = player.token
  turnHeading.innerText = `It's ${playerToken}'s turn!`;
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

function displayToken() {
  event.target.innerText =  currentPlayer.token;
  toggleTurn();
}

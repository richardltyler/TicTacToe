class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.winner;
    this.winningSequences = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 5, 8],
      ];
  }

  updateGameBoard(index, token) {
    this.gameBoard[index] = token;
  }

  winGame(player) {
  for (var i = 0; i < this.winningSequences.length; i++) {
    var sequence = this.winningSequences[i];
    var playerSpaces = player.spaces;
    if (playerSpaces.includes(sequence[0]) && playerSpaces.includes(sequence[1]) && playerSpaces.includes(sequence[2])) {
      return true;
    } else if (!this.gameBoard.includes(null)) {
      
    }
  }
}
  saveGameBoard() {

  }
}

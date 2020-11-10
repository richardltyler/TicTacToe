class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.winner;
    this.winningSequences = [
        [0, 4, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
      ];
  }

  updateGameBoard(index) {
      this.gameBoard[index] = this.currentPlayer.token;
  }

  decideFirstTurn() {
    var players = [this.player1, this.player2];
    var randomIndex = Math.floor(Math.random() * players.length);
    this.currentPlayer = players[randomIndex];
  }

  checkForWin(player) {
    var token = player.token;
    var board = this.gameBoard;
    for (var i = 0; i < this.winningSequences.length; i++) {
      var space = this.winningSequences[i];
      if (board[space[0]] === token && board[space[1]] === token && board[space[2]] === token) {
        return true;
      }
    }
  }

  checkForDraw(player) {
    if (!this.gameBoard.includes(null)) {
      return true;
    }
  }

  saveGameBoardToPlayer(winner) {
    winner.wins.push(this.gameBoard);
    winner.saveWinsToStorage();
    winner.updateWinCount();
  }

  toggleTurn() {
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }
}

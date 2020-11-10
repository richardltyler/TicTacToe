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

  checkForGameEnd() {
    var token = this.currentPlayer.token;
    var board = this.gameBoard;
    var order = this.winningSequences;
    for (var i = 0; i < order.length; i++) {
      if (board[order[i][0]] === token && board[order[i][1]] === token && board[order[i][2]] === token) {
        return 'win';
      } else if (!this.gameBoard.includes(null)) {
        return 'draw';
      }
    }
  }

  saveGameBoardToPlayer() {
    this.currentPlayer.wins.push(this.gameBoard);
    this.currentPlayer.saveWinsToStorage();
    this.currentPlayer.updateWinCount();
  }

  toggleTurn() {
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }
}

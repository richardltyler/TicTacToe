class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
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

  updateGameBoard(index, token) {
    this.gameBoard[index] = token;
  }

  winGame(player) {
    var token = player.token;
    var board = this.gameBoard;
    // var win = false;
    for (var i = 0; i < this.winningSequences.length; i++) {
      var space = this.winningSequences[i];
      if (board[space[0]] === token && board[space[1]] === token && board[space[2]] === token) {
        console.log('motherFucker');
        // win = true;
        return 'win';
      }
    }
  }

  tieGame(player) {
    if (!this.gameBoard.includes(null)) {
      return 'draw';
    }
  }

  saveGameBoardToPlayer(winner) {
    winner.wins.push(this.gameBoard);
    winner.updateWinCount();
  }
}

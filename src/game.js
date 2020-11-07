class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.winner;
  }
  updateGameBoard() {

  }
  // winGame() {
  //   var winningConditions = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [2, 4, 6],
  //     [0, 5, 8],
  //   ];
  //   for ( var i = 0; i < winningConditions; i++) {
  //     if (this.player1.spaces.includes(winningConditions[i])) {
  //       this.player1.wins++;
  //       this.winner = this.player1;
  //     } else if (this.player2.spaces.includes(winningConditions[i])) {
  //       this.player2.wins++;
  //       this.winner = this.player2;
  //   }
  // }
  saveGameBoard() {

  }
}

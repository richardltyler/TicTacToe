class Player {
  constructor(token, wins) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins || [];
    this.winCount = 0;
    this.isTurn = false;

  }
  updateWinCount() {
    this.winCount = this.wins.length;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
}

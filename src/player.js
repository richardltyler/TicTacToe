class Player {
  constructor(token, wins) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins || [];
    this.winCount = 0;
  }
  updateWinCount() {
    this.winCount = this.wins.length;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
}

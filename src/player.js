class Player {
  constructor(token, turn, wins) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins || 0;
    this.isTurn = turn;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
}

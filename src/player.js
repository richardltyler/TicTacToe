class Player {
  constructor(token, wins) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins || [];
    this.isTurn = false;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
}

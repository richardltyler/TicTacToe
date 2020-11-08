class Player {
  constructor(token, wins) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins || 0;
    this.isTurn = false;
    this.spaces = [];
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
}

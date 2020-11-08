class Player {
  constructor(token, wins) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins || [];
    this.isTurn = false;
    this.spaces = [];
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
}

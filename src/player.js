class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins || [];
    this.winCount = 0;
  }
  updateWinCount() {
    this.winCount = this.wins.length;
  }

  saveWinsToStorage() {
    localStorage.removeItem(`${this.name}`);
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.name}`, stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var storedWins = JSON.parse(localStorage.getItem(`${this.name}`));
    this.wins = storedWins;
    this.updateWinCount();
  }
}

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
    var stringifiedWins = JSON.stringify(this);
    localStorage.setItem(`${this.name}`, stringifiedWins);
  }

  // retrieveWinsFromStorage() {
  //   var storedWins = JSON.parse(localStorage.getItem(`${this.id}`));
  //   this.id = storedWins.id;
  //   this.wins = storedWins.wins;
  //   this.updateWinCount();
  // }
}

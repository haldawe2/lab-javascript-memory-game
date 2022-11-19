class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    for (let i = this.cards.length; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      [this.cards[randomIndex], this.cards[i - 1]] = [
        this.cards[i - 1],
        this.cards[randomIndex],
      ];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }
}

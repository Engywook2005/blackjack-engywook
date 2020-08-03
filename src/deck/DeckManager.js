const Deck = require('card-deck-engywook').HTMLDeck;

class DeckManager {
  /**
   * Creates and shuffles deck first time used.
   */
  constructor() {
    this.deck = null;
    this.getAndShuffleDeck();
  }

  /**
   * Creates and shuffles deck. Should be called after each round.
   */
  getAndShuffleDeck() {
    this.deck = new Deck();
    this.deck.shuffle();
  }

  /**
   * Returns one card drawn from deck.
   * @returns {any}
   */
  drawCard() {
    return this.deck.draw()[0];
  }
}

module.exports = DeckManager;

/* eslint-disable react/prefer-stateless-function */
import Parser from 'html-react-parser';
import React from 'react';
import DeckManager from '../deck/DeckManager';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.deckManager = new DeckManager();
    this.state = {
      dealerHand: [],
      playerHand: [],
    };

    this.history = [];
  }

  componentDidMount() {
    this.startGame();
  }

  startGame() {
    // @TODO dealers' hand

    const { playerHand } = this.state;
    playerHand.push(this.deckManager.drawCard());

    this.updateState({ playerHand });
  }

  updateState(newState) {
    this.updateHistory();

    this.setState(newState);
  }

  // @TODO Throwing error (converting circular structure to JSON) so for now making no-op
  updateHistory() {
    return;

    // @TODO cards will be flattened to strings, will need to be able to bring these back.
    //  Or just make sure state is shallow object.
    this.history.push(JSON.parse(JSON.stringify(this.state))); // eslint-disable-line no-unreachable
  }

  render() {
    const { playerHand } = this.state;

    return (
      <div id="container">
        <div id="playerHand">
          {
          playerHand.map((card, key) => (
            <div
              key={key}
              className="card"
            >
              {Parser(card.getFace())}
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

module.exports = App;

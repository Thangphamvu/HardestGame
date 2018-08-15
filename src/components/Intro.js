import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Intro extends Component {
  playGame = () => {
    this.props.playGame();
  };
  render() {
    return (
      <div>
        <h4>THE WORLD'S</h4>
        <h1>HARDEST GAME</h1>
        <button className="button" onClick={this.playGame}>
          <span className="">PLAY GAME</span>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  playGame: () => dispatch(actions.playGame())
});

export default connect(
  null,
  mapDispatchToProps
)(Intro);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intro from './Intro';
import Playing from './Playing';

class Game extends Component {
  playGame = () => {
    this.props.playGame();
  };
  render() {
    const { isPlaying } = this.props;
    return (
      <div className="intro">
        <div className="info">
          <h3>CREATOR: THANG PHAMVU</h3>
        </div>
        <div className="playing">{isPlaying ? <Playing /> : <Intro />}</div>
        <div className="info" />
      </div>
    );
  }
}

const mapStateToProps = ({ playing }) => ({
  isPlaying: playing.isPlaying
});
export default connect(
  mapStateToProps,
  null
)(Game);

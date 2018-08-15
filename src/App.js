import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Game from './components/Game';
import Congrat from './components/Congrat';

class App extends Component {
  render() {
    const { isWin } = this.props;
    return (
      <div className="App">
        <h2>WORLD'S HARDEST GAME</h2>
        <Game />
      </div>
    );
  }
}

const mapStateToProps = ({ playing }) => ({
  isWin: playing.isWin
});
export default connect(
  mapStateToProps,
  null
)(App);

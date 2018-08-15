import React, { Component } from 'react';
import Enemy from './Enemy';
import { connect } from 'react-redux';
import * as actions from '../actions';
let rectX = 45;
let rectY = 125;
let step = 10;

class Playing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cirX: null,
      cirY: null
    };
  }
  componentDidMount = () => {
    this.updateCanvas();
    window.addEventListener('keydown', this.move);
  };
  updateCanvas = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#9ef29b';
    ctx.fillRect(0, 0, 120, 280);
    ctx.fillRect(520, 0, 120, 280);
    ctx.fillStyle = '#f8f7ff';
    ctx.fillRect(120, 0, 400, 280);
    ctx.fillStyle = '#e0dafe';
    for (let x = 160; x <= 480; x += 80) {
      for (let y = 0; y <= 240; y += 80) {
        ctx.fillRect(x, y, 40, 40);
      }
    }
    for (let x = 120; x <= 440; x += 80) {
      for (let y = 40; y <= 200; y += 80) {
        ctx.fillRect(x, y, 40, 40);
      }
    }
    ctx.clearRect(120, 0, 40, 240);
    ctx.clearRect(480, 40, 40, 240);
    ctx.clearRect(160, 0, 280, 40);
    ctx.clearRect(200, 240, 280, 40);
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(rectX, rectY, 30, 30);
    ctx.stroke();
  };
  move = e => {
    switch (e.keyCode) {
      case 37:
        rectX -= step;
        break;
      case 38:
        rectY -= step;
        break;
      case 39:
        rectX += step;
        break;
      case 40:
        rectY += step;
        break;
      default:
    }
    if (rectX >= 520) {
      this.props.winGame();
    }
    if (rectX <= 0 && e.keyCode === 37) {
      rectX = 0;
    } else if (rectX >= 90 && rectX < 110 && rectY < 240 && e.keyCode === 39) {
      rectX = 90;
    } else if (rectX >= 170 && rectX < 190 && rectY > 210 && e.keyCode === 39) {
      rectX = 170;
    } else if (rectX >= 450 && rectX < 470 && rectY > 10 && e.keyCode === 39) {
      rectX = 450;
    } else if (rectX >= 610 && e.keyCode === 39) {
      rectX = 610;
    } else if (rectX <= 160 && rectX > 140 && rectY < 240 && e.keyCode === 37) {
      rectX = 160;
    } else if (rectX <= 440 && rectX > 420 && rectY < 40 && e.keyCode === 37) {
      rectX = 440;
    } else if (rectX <= 520 && rectX > 500 && rectY > 10 && e.keyCode === 37) {
      rectX = 520;
    }
    if (rectY <= 0 && e.keyCode === 38) {
      rectY = 0;
    } else if (rectY >= 250 && e.keyCode === 40) {
      rectY = 250;
    } else if (rectY <= 240 && rectX > 90 && rectX < 160 && e.keyCode === 38) {
      rectY = 240;
    } else if (rectY <= 40 && rectX > 150 && rectX < 440 && e.keyCode === 38) {
      rectY = 40;
    } else if (rectY >= 210 && rectX > 170 && rectX < 460 && e.keyCode === 40) {
      rectY = 210;
    } else if (rectY >= 10 && rectX > 450 && rectX < 520 && e.keyCode === 40) {
      rectY = 10;
    }
    this.updateCanvas();
  };

  _cirPositionHandle = (cirX, cirY) => {
    this.setState({ cirX, cirY }, this.collision);
  };

  collision = () => {
    const { cirX, cirY } = this.state;
    let d = Math.sqrt(Math.pow(rectX + 15 - cirX, 2) + Math.pow(rectY + 15 - cirY, 2));
    if (d <= Math.sqrt(2 * Math.pow(15, 2) + 15) / 2 + 10) {
      rectX = 45;
      rectY = 125;
    }
    this.updateCanvas();
  };

  render() {
    const { isWin } = this.state;
    return (
      <div className="ongame">
        {isWin ? (
          <h2>CONGRATULATION</h2>
        ) : (
          <div>
            {' '}
            <canvas ref="canvas" width={640} height={280} />
            <Enemy cirPositionHandle={this._cirPositionHandle} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  winGame: () => dispatch(actions.winGame())
});

export default connect(
  null,
  mapDispatchToProps
)(Playing);

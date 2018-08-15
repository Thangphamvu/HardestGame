import React, { Component } from 'react';
const step = 8;
class Enemy extends Component {
  componentDidMount = () => {
    this.updateEnemy();
  };

  draw = (cirX, cirY) => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    let ltr = false;
    setInterval(() => {
      if (cirX <= 170) {
        ltr = true;
      } else if (cirX >= 470) {
        ltr = false;
      }
      ctx.clearRect(cirX - 11 - step, cirY - 10 - step, (step + 11) * 2, (step + 10) * 2);
      ctx.beginPath();
      ctx.arc(cirX, cirY, 10, 0, 2 * Math.PI);
      ctx.fillStyle = '#0000ff';
      ctx.fill();
      ctx.stroke();
      ltr ? (cirX += step) : (cirX -= step);
      this.props.cirPositionHandle(cirX, cirY);
    }, 45);
  };

  updateEnemy = () => {
    this.draw(170, 60);
    this.draw(170, 140);
    this.draw(170, 220);
    this.draw(470, 100);
    this.draw(470, 180);
  };

  render() {
    return (
      <div className="enemy">
        <canvas ref="canvas" width={640} height={280} />
      </div>
    );
  }
}

export default Enemy;

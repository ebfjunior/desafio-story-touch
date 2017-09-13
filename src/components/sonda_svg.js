import React, { Component } from "react";
import { connect } from "react-redux";

class SondaSVG extends Component {
  constructor(props) {
    super(props);

    this._size = this.props.config.size;

    this.x = this.x.bind(this);
    this.y = this.y.bind(this);
  }
  x() {
    const [origem_x, origem_y] = this.props.origem;
    const { currentX } = this.props.sonda;
    let position = currentX * this._size + origem_x;

    return position;
  }
  y() {
    const [origem_x, origem_y] = this.props.origem;
    const { currentY } = this.props.sonda;
    let position = currentY * this._size * -1 + origem_y;

    return position;
  }
  render() {
    const mapDirectionToBorder = {
      N: [0, 0, this._size, 0],
      S: [0, this._size, this._size, this._size],
      E: [this._size, 0, this._size, this._size],
      W: [0, 0, 0, this._size]
    };

    const [x1, y1, x2, y2] = mapDirectionToBorder[this.props.sonda.currentDirecao];

    return (
      <svg
        width={this._size}
        height={this._size}
        x={this.x()}
        y={this.y()}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={this._size}
          height={this._size}
          fill="#3FC0D9"
        />

        <line x1={x1} y1={y1} x2={x2} y2={y2} style={{stroke: "#FEAA14", strokeWidth: 8}} />
      </svg>
    );
  }
}

function mapStateToProps({ config, sondas }) {
  return { config, sondas };
}

export default connect(mapStateToProps)(SondaSVG);
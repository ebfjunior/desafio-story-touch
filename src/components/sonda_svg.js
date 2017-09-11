import React, { Component } from "react";
import { connect } from "react-redux";

class SondaSVG extends Component {
  constructor(props) {
    super(props);

    this._size = 40;

    this.x = this.x.bind(this);
    this.y = this.y.bind(this);
  }
  x() {
    const [origem_x, origem_y] = this.props.origem;
    const { x } = this.props.sonda;
    let position = x * this._size + origem_x;

    if (x > 0) position -= this._size;

    return position;
  }
  y() {
    const [origem_x, origem_y] = this.props.origem;
    const { y } = this.props.sonda;
    let position = y * this._size * -1 + origem_y;

    if (y < 0) position -= this._size;

    return position;
  }
  render() {
    return (
      <svg
        width={this._size}
        height={this._size}
        x={this.x()}
        y={this.y()}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={this._size} height={this._size} fill="black" />
      </svg>
    );
  }
}

function mapStateToProps({ config, sondas }) {
  return { config, sondas };
}

export default connect(mapStateToProps)(SondaSVG);
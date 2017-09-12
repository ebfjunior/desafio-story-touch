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
      N: "Top",
      S: "Bottom",
      E: "Right",
      W: "Left"
    };

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
          fill="#555"
          rx="5"
          ry="5"
          style={{
            [`border${mapDirectionToBorder[
              this.props.sonda.direcao
            ]}`]: "1px solid #222299"
          }}
        />
      </svg>
    );
  }
}

function mapStateToProps({ config, sondas }) {
  return { config, sondas };
}

export default connect(mapStateToProps)(SondaSVG);
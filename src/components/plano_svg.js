import React, { Component } from "react";
import { connect } from "react-redux";

import SondaSVG from "./sonda_svg.js";

class PlanoSVG extends Component {
  constructor(props) {
    super(props);

    this._size = 40;

    this.renderSonda = this.renderSonda.bind(this);
  }
  width() {
    return this.props.config.width * this._size + this._size;
  }
  height() {
    return this.props.config.height * this._size + this._size;
  }
  origem_x() {
    return 0;
  }
  origem_y() {
    return this.props.config.height * this._size;
  }
  renderSonda(sonda, index) {
    return (
      <SondaSVG
        sonda={sonda}
        key={index}
        origem={[this.origem_x(), this.origem_y()]}
      />
    );
  }
  render() {
    if (!this.props.config.configured) return <div />;

    return (
      <svg
        width={this.width() + 1}
        height={this.height() + 1}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width={this._size}
            height={this._size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${this._size} 0 L 0 0 0 ${this._size}`}
              fill="none"
              stroke="#333"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect
          width={this.width() + 1}
          height={this.height() + 1}
          fill="url(#grid)"
        />

        {this.props.sondas.map(this.renderSonda)}
      </svg>
    );
  }
}

function mapStateToProps({ config, sondas }) {
  return { config, sondas };
}

export default connect(mapStateToProps)(PlanoSVG);
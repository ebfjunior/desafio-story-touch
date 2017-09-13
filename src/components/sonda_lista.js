import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SondaItem from "./sonda_item";

class SondaLista extends Component {
  constructor(props) {
    super(props);

    this.renderSonda = this.renderSonda.bind(this);
  }
  renderSonda(sonda, index) {
    return <SondaItem key={index} sonda={sonda} />;
  }
  render() {
    return (
      <div style={{ display: this.props.config.configured ? "block" : "none" }}>
        {this.props.sondas.map(this.renderSonda)}
        <SondaItem />
      </div>
    );
  }
}

function mapStateToProps({ sondas, config }) {
  return { sondas, config };
}

export default connect(mapStateToProps)(SondaLista);
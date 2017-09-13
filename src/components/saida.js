import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Saida extends Component {
  constructor(props) {
    super(props);
  }
  renderLiResultado(sonda, index) {
    return (
      <div key={index}>
        <b>Sonda {index + 1}:</b> {sonda.currentX} {sonda.currentY}{" "}
        {sonda.currentDirecao}
      </div>
    );
  }
  render() {
    return (
      <div
        className="saida"
        style={{
          display:
            this.props.config.configured && this.props.config.started
              ? "block"
              : "none"
        }}
      >
        <h4>Resultado</h4>
        {this.props.sondas.map(this.renderLiResultado)}
      </div>
    );
  }
}

function mapStateToProps({ sondas, config }) {
  return { sondas, config };
}

export default connect(mapStateToProps)(Saida);
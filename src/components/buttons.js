import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { sondaMove, sondaLeft, sondaRight } from "../actions/sondas_action";

import { iniciarSimulacao, novaSimulacao } from "../actions/config_action";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.simular = this.simular.bind(this);
  }
  async simular() {
    this.props.iniciarSimulacao();

    for (const index in this.props.sondas) {
      const sonda = this.props.sondas[index];
      for (const comando of sonda.comandos) {
        switch (comando) {
          case "L":
            this.props.sondaLeft(index, sonda);
            await sleep(100);
            break;
          case "R":
            this.props.sondaRight(index, sonda);
            await sleep(100);
            break;
          case "M":
            this.props.sondaMove(
              index,
              sonda,
              this.props.config,
              this.props.sondas
            );
            await sleep(100);
            break;
        }
      }
    }
  }
  render() {
    return (
      <div className="buttons">
        <button
          type="button"
          className="btn btn-success"
          style={{
            display:
              this.props.config.configured && !this.props.config.started
                ? "inline"
                : "none"
          }}
          onClick={this.simular}
        >
          Simular
        </button>

        <button
          type="button"
          className="btn btn-primary"
          style={{
            display:
              this.props.config.configured && this.props.config.started
                ? "inline"
                : "none"
          }}
          onClick={this.props.novaSimulacao}
        >
          Nova simulação
        </button>
      </div>
    );
  }
}

function mapStateToProps({ config, sondas }) {
  return { config, sondas };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sondaMove, sondaLeft, sondaRight, iniciarSimulacao, novaSimulacao },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
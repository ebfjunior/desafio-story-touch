import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { sondaMove, sondaLeft, sondaRight } from "../actions/sondas_action";

import SondaLista from "./sonda_lista";
import Configuracao from "./configuracao";
import PlanoSVG from "./plano_svg";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.simular = this.simular.bind(this);
  }
  async simular() {
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
            this.props.sondaMove(index, sonda, this.props.config);
            await sleep(100);
            break;
        }
      }
    }
  }
  render() {
    return (
      <div>
        <Configuracao />
        <SondaLista />
        <PlanoSVG />
        <button type="button" className="btn btn-danger" onClick={this.simular}>
          Simular
        </button>
      </div>
    );
  }
}

function mapStateToProps({ config, sondas }) {
  return { config, sondas };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sondaMove, sondaLeft, sondaRight }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
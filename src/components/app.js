import React, { Component } from "react";

import SondaLista from "./sonda_lista";
import Configuracao from "./configuracao";
import PlanoSVG from "./plano_svg";
import Buttons from "./buttons";
import Saida from "./saida";

export default class App extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="row">
          <div className="col-xs-12">
            <Configuracao />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SondaLista />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Buttons />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Saida />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <PlanoSVG />
          </div>
        </div>
      </div>
    );
  }
}
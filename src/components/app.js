import React, { Component } from "react";

import SondaLista from "./sonda_lista";
import Configuracao from "./configuracao";
import PlanoSVG from "./plano_svg";

export default class App extends Component {
  render() {
    return (
      <div>
        <Configuracao />
        <SondaLista />
        <PlanoSVG width="6" height="5" />
      </div>
    );
  }
}
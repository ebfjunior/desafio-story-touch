import React, { Component } from 'react';

import SondaLista from './sonda_lista'
import Configuracao from './configuracao'
import Plano from './plano'

export default class App extends Component {
  render() {
    return (
      <div>
        <Configuracao/>
        <SondaLista/>
        <Plano width="6" height="5"/>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {adicionarSonda} from '../actions/sondas_action';

class SondaItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      x: (this.props.sonda ? this.props.sonda.x : null), 
      y: (this.props.sonda ? this.props.sonda.y : null), 
      direcao: (this.props.sonda ? this.props.sonda.direcao : null),
      comandos: (this.props.sonda ? this.props.sonda.comandos : null)
    };


    this.onInputChange = this.onInputChange.bind(this);
    this.adicionarSonda = this.adicionarSonda.bind(this);
  }
  onInputChange(e){
    this.setState({[e.target.name] : e.target.value});
  }
  adicionarSonda(e){
    this.props.adicionarSonda(this.state);
    this.setState({x: null, y: null, direcao: null, comandos: null});
  }
  render() {
    return (
      <div className="form-group form-inline sonda-item">
        <input type="number" name="x" value={this.state.x} className="x-input form-control" placeholder="Coordenada X" onChange={this.onInputChange} disabled={this.props.sonda}/>
        <input type="number" name="y" value={this.state.y} className="y-input form-control" placeholder="Coordenada Y" onChange={this.onInputChange} disabled={this.props.sonda}/>
        <input type="text" name="direcao" value={this.state.direcao} maxLength="1" className="direcao-input form-control" placeholder="Direção (N, S, E, W)" onChange={this.onInputChange} disabled={this.props.sonda}/>
        <input type="text" name="comandos" value={this.state.comandos} className="comandos-input form-control" size="40" placeholder="L: Esquerda | R: Direita | M: Frente" onChange={this.onInputChange} disabled={this.props.sonda}/>
        <button type="button" className="btn btn-primary" onClick={this.adicionarSonda} style={{display: (this.props.sonda ? 'none' : 'inline')}}>Adicionar</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adicionarSonda }, dispatch);
}

export default connect(null, mapDispatchToProps)(SondaItem);

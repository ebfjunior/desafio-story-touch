import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {adicionarSonda} from '../actions/sondas_action';

class SondaItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      x: (this.props.sonda ? this.props.sonda.x : ""), 
      y: (this.props.sonda ? this.props.sonda.y : ""), 
      direcao: (this.props.sonda ? this.props.sonda.direcao : ""),
      comandos: (this.props.sonda ? this.props.sonda.comandos : ""),
      errors: []
    };


    this.onInputChange = this.onInputChange.bind(this);
    this.adicionarSonda = this.adicionarSonda.bind(this);
    this.validate = this.validate.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  onInputChange(e){
    this.setState({[e.target.name] : e.target.value.toUpperCase().trim()});
  }
  validate(){
    this.setState({errors: []});
    let errors = [];
    
    if(parseInt(this.state.x, 10) > this.props.config.width || this.state.x < 0) errors.push("A coordenada X não deve ultrapassar a largura do platô");
    if(parseInt(this.state.y, 10) > this.props.config.height || this.state.y < 0) errors.push("A coordenada Y não deve ultrapassar a altura do platô");
    if(!this.state.x) errors.push("A coordenada X da sonda é obrigatória");
    if(!this.state.y) errors.push("A coordenada Y da sonda é obrigatória");
    if(!this.state.direcao) errors.push("A direção da sonda é obrigatória");
    if(this.state.direcao && ['N', 'S', 'E', 'W'].indexOf(this.state.direcao) == -1) errors.push("A direção deve ser N, S, E ou W");
    if(!this.state.comandos) errors.push("Os comandos da sonda são obrigatórios");

    this.setState({errors});

    return !errors.length;
  }
  adicionarSonda(e){
    if(this.validate()){
      this.props.adicionarSonda(this.state);
      this.setState({x: "", y: "", direcao: "", comandos: "", errors: []});
    }
  }
  renderErrors(error, index){
    return (<div key={index} className="text-danger errors">{error}</div>);
  }
  render() {
    return (
      <div className="form-group form-inline sonda-item" style={{display: (!this.props.sonda && this.props.started ? "none" : "block") }}>
        <input type="number" name="x" value={this.state.x} className="x-input form-control" placeholder="Coordenada X" onChange={this.onInputChange} disabled={!!this.props.sonda}/>
        <input type="number" name="y" value={this.state.y} className="y-input form-control" placeholder="Coordenada Y" onChange={this.onInputChange} disabled={!!this.props.sonda}/>
        <input type="text" name="direcao" value={this.state.direcao} maxLength="1" className="direcao-input form-control" placeholder="Direção (N, S, E, W)" onChange={this.onInputChange} disabled={!!this.props.sonda}/>
        <input type="text" name="comandos" value={this.state.comandos} className="comandos-input form-control" size="40" placeholder="L: Esquerda | R: Direita | M: Frente" onChange={this.onInputChange} disabled={!!this.props.sonda}/>
        <button type="button" className="btn btn-primary" onClick={this.adicionarSonda} style={{display: (this.props.sonda ? 'none' : 'inline')}}>Adicionar</button>
        {this.state.errors.map(this.renderErrors)}
      </div>
    );
  }
}

function mapStateToProps({config}){
  return {config};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adicionarSonda }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SondaItem);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {configurarPlano} from '../actions/config_action';

class Configuracao extends Component {
  constructor(props){
    super(props);

    this.state = {width: null, height: null, configured: false};

    this.onInputChange = this.onInputChange.bind(this);
    this.configurarPlano = this.configurarPlano.bind(this);
  }
  onInputChange(e){
    this.setState({[e.target.name] : e.target.value});
  }
  configurarPlano(e){
    this.setState({configured: true});
    this.props.configurarPlano(this.state);
  }
  render() {
    return (
      <div className="form-group form-inline sonda-item">
        <input type="number" name="width" value={this.state.width} className="width-input form-control" placeholder="Largura" onChange={this.onInputChange} disabled={this.state.configured}/>
        <input type="number" name="height" value={this.state.height} className="height-input form-control" placeholder="Altura" onChange={this.onInputChange} disabled={this.state.configured}/>
        <button type="button" className="btn btn-primary" onClick={this.configurarPlano} disabled={this.state.configured}>Configurar</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ configurarPlano }, dispatch);
}

export default connect(null, mapDispatchToProps)(Configuracao);

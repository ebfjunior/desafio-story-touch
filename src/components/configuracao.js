import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { configurarPlano } from "../actions/config_action";

class Configuracao extends Component {
  constructor(props) {
    super(props);

    this.state = { width: "", height: "", configured: false, errors: [] };

    this.onInputChange = this.onInputChange.bind(this);
    this.configurarPlano = this.configurarPlano.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  validate(){
    this.setState({errors: []});
    let errors = [];
    
    if(parseInt(this.state.width, 10) < 0) errors.push("A largura do platô deve ser maior que zero");
    if(parseInt(this.state.height, 10) < 0) errors.push("A altura do platô deve ser maior que zero");
    if(!this.state.width) errors.push("A largura do platô é obrigatória");
    if(!this.state.height) errors.push("A altura do platô é obrigatória");

    this.setState({errors});

    return !errors.length;
  }
  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value.trim() });
  }
  configurarPlano(e) {
    if(this.validate()){
      this.setState({ configured: true });
      this.props.configurarPlano(this.state);  
    }
    
  }
  renderErrors(error, index){
    return (<div key={index} className="text-danger errors">{error}</div>);
  }
  render() {
    return (
            <div className="configuracao text-center">
            <h3>SONDAS DE MARTE</h3>
            <div className="form-group form-inline">
            <input
            type="number"
            name="width"
            value={this.state.width}
            className="width-input form-control"
            placeholder="Largura"
            onChange={this.onInputChange}
            disabled={this.props.config.configured}
            />
            <input
            type="number"
            name="height"
            value={this.state.height}
            className="height-input form-control"
            placeholder="Altura"
            onChange={this.onInputChange}
            disabled={this.props.config.configured}
            />
            <button
            type="button"
            className="btn btn-primary"
            onClick={this.configurarPlano}
            disabled={this.props.config.configured}
            >
            Configurar
            </button>
            </div>
            {this.state.errors.map(this.renderErrors)}
            </div>
            );
  }
}

function mapStateToProps({ config }) {
  return { config };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ configurarPlano }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuracao);
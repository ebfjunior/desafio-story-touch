import React, { Component } from 'react';
import { connect } from "react-redux";

class Plano extends Component {
  constructor(props){
    super(props);

    this._size = 40;
  }
  width(){
    return this.props.config.width * this._size * 2;
  }
  height(){
    return this.props.config.height * this._size * 2;
  }
  render() {
    console.log(this.props.config.configured);
    if(!this.props.config.configured) return (<div></div>);

    return (
      <svg width={this.width()+1} height={this.height()+1} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width={this._size} height={this._size} patternUnits="userSpaceOnUse">
            <path d={`M ${this._size} 0 L 0 0 0 ${this._size}`} fill="none" stroke="gray" strokeWidth="0.5"/>
          </pattern>
          <pattern id="grid" width={this.width()/2} height={this.height()/2} patternUnits="userSpaceOnUse">
            <rect width={this.width()/2} height={this.height()/2} fill="url(#smallGrid)"/>
            <path d={`M ${this.width()/2} 0 L 0 0 0 ${this.height()/2}`} fill="none" stroke="gray" strokeWidth="2"/>
          </pattern>
        </defs>

        <rect width={this.width()+1} height={this.height()+1} fill="url(#grid)" />
      </svg>
    );
  }
}

function mapStateToProps({config}) {
  return {config};
}

export default connect(mapStateToProps)(Plano);

import _ from 'lodash';

export default class Sonda {
  constructor({ x, y, direcao, comandos }) {
    this._x = this._currentX = parseInt(x, 10);
    this._y = this._currentY = parseInt(y, 10);
    this._direcao = this._currentDirecao = direcao;
    this._comandos = comandos;
  }
  right() {
    const mapDirections = { N: "E", E: "S", S: "W", W: "N" };
    this.currentDirecao = mapDirections[this.currentDirecao];
  }
  left() {
    const mapDirections = { N: "W", W: "S", S: "E", E: "N" };
    this.currentDirecao = mapDirections[this.currentDirecao];
  }
  move(config, coordenadas) {
    let {currentX : newX, currentY : newY} = this;

    switch (this.currentDirecao) {
      case "N":
      newY++;
      break;
      case "E":
      newX++;
      break;
      case "S":
      newY--;
      break;
      case "W":
      newX--;
      break;
    }

    delete coordenadas.x[coordenadas.x.indexOf(this.currentX)];
    delete coordenadas.y[coordenadas.y.indexOf(this.currentY)];
    
    if(
       (newX >= 0 && newX <= config.width) &&
       (newY >= 0 && newY <= config.height) &&
       (coordenadas.x.indexOf(newX) == -1 || coordenadas.y.indexOf(newY) == -1)
       ){
      this.currentX = newX;
    this.currentY = newY;
  }
}

get x() {
  return this._x;
}
set x(x) {
  this._x = x;
}

get currentX() {
  return this._currentX;
}
set currentX(currentX) {
  this._currentX = currentX;
}

get y() {
  return this._y;
}
set y(y) {
  this._y = y;
}

get currentY() {
  return this._currentY;
}
set currentY(currentY) {
  this._currentY = currentY;
}

get direcao() {
  return this._direcao;
}
set direcao(direcao) {
  this._direcao = direcao;
}

get currentDirecao() {
  return this._currentDirecao;
}
set currentDirecao(currentDirecao) {
  this._currentDirecao = currentDirecao;
}

get comandos() {
  return this._comandos;
}
set comandos(comandos) {
  this._comandos = comandos;
}
}
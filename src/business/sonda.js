export default class Sonda {
  constructor({ x, y, direcao, comandos }) {
    this._x = parseInt(x, 10);
    this._y = parseInt(y, 10);
    this._direcao = direcao;
    this._comandos = comandos;
  }

  get x() {
    return this._x;
  }
  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }
  set y(y) {
    this._y = y;
  }

  get direcao() {
    return this._direcao;
  }
  set direcao(direcao) {
    this._direcao = direcao;
  }

  get comandos() {
    return this._comandos;
  }
  set comandos(comandos) {
    this._comandos = comandos;
  }
}
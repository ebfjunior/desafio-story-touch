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
  move(config) {
    switch (this.currentDirecao) {
      case "N":
        if (this.currentY + 1 <= config.height) this.currentY++;
        break;
      case "E":
        if (this.currentX + 1 <= config.width) this.currentX++;
        break;
      case "S":
        if (this.currentY - 1 >= config.height) this.currentY--;
        break;
      case "W":
        if (this.currentX - 1 >= config.width) this.currentX--;
        break;
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
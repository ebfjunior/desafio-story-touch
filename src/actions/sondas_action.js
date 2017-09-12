import Sonda from "../business/sonda";

export const ADICIONAR_SONDA = "ADICIONAR_SONDA";
export const SONDA_MOVE = "SONDA_MOVE";
export const SONDA_LEFT = "SONDA_LEFT";
export const SONDA_RIGHT = "SONDA_RIGHT";

export function adicionarSonda(params) {
  const sonda = new Sonda(params);
  return {
    type: ADICIONAR_SONDA,
    payload: sonda
  };
}

export function sondaMove(index, sonda, config) {
  return {
    type: SONDA_MOVE,
    payload: { index, sonda, config }
  };
}

export function sondaLeft(index, sonda) {
  return {
    type: SONDA_LEFT,
    payload: { index, sonda }
  };
}

export function sondaRight(index, sonda) {
  return {
    type: SONDA_RIGHT,
    payload: { index, sonda }
  };
}
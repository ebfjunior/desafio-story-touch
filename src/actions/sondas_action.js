import Sonda from "../business/sonda";

export const SONDA_ADD = "SONDA_ADD";
export const SONDA_MOVE = "SONDA_MOVE";
export const SONDA_LEFT = "SONDA_LEFT";
export const SONDA_RIGHT = "SONDA_RIGHT";

export function adicionarSonda(params) {
  const sonda = new Sonda(params);
  return {
    type: SONDA_ADD,
    payload: sonda
  };
}

export function sondaMove(index, sonda, config, sondas) {
  return {
    type: SONDA_MOVE,
    payload: { index, sonda, config, sondas }
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
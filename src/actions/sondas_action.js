import Sonda from '../business/sonda';

export const ADICIONAR_SONDA = "ADICIONAR_SONDA";

export function adicionarSonda(params) {
  const sonda = new Sonda(params);
  return {
    type: ADICIONAR_SONDA,
    payload: sonda
  };
}
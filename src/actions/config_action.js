export const CONFIGURAR_PLANO = "CONFIGURAR_PLANO";

export function configurarPlano(params) {
  return {
    type: CONFIGURAR_PLANO,
    payload: params
  };
}
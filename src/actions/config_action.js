export const CONFIGURAR_PLANO = "CONFIGURAR_PLANO";
export const INICIAR_SIMULACAO = "INICIAR_SIMULACAO";
export const NOVA_SIMULACAO = "NOVA_SIMULACAO";

export function configurarPlano(params) {
  return {
    type: CONFIGURAR_PLANO,
    payload: params
  };
}

export function iniciarSimulacao() {
  return {
    type: INICIAR_SIMULACAO
  };
}

export function novaSimulacao() {
  return {
    type: NOVA_SIMULACAO
  };
}
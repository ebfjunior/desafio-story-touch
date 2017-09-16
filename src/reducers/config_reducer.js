import {
  CONFIGURAR_PLANO,
  INICIAR_SIMULACAO,
  NOVA_SIMULACAO
} from "../actions/config_action";

export default function ConfigReducer(
  state = { configured: false, started: false, size: 40 },
  action
) {
  switch (action.type) {
    case CONFIGURAR_PLANO:
      return { ...state, ...action.payload, configured: true };
    case INICIAR_SIMULACAO:
      return { ...state, started: true };
    case NOVA_SIMULACAO:
      return {
        ...state,
        started: false,
        configured: false,
        width: "",
        height: ""
      };
  }
  return state;
}
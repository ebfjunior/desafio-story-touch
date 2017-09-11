import {CONFIGURAR_PLANO} from '../actions/config_action';

export default function ConfigReducer(state = {configured: false}, action){
  switch (action.type) {
    case CONFIGURAR_PLANO:
      return {...state, ...action.payload, configured: true};
  }
  return state;
}
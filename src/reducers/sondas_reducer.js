import {ADICIONAR_SONDA} from '../actions/sondas_action';

export default function SondasReducer(state = [], action){
  switch (action.type) {
    case ADICIONAR_SONDA:
      return [...state, action.payload];
  }
  return state;
}
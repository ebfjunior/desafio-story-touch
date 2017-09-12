import { ADICIONAR_SONDA, SONDA_MOVE, SONDA_LEFT, SONDA_RIGHT } from "../actions/sondas_action";

export default function SondasReducer(state = [], action) {
  switch (action.type) {
    case ADICIONAR_SONDA:
      return [...state, action.payload];
      break;
    case SONDA_MOVE:
      var {index, sonda, distancia} = action.payload;
      sonda.move(distancia);
      return [...state];
      break;
    case SONDA_LEFT:
      var {index, sonda} = action.payload;
      sonda.left();
      return [...state];
      break;
    case SONDA_RIGHT:
      var {index, sonda} = action.payload;
      sonda.right();
      return [...state];
      break;
  }
  return state;
}
import _ from 'lodash';

import {
  SONDA_ADD,
  SONDA_MOVE,
  SONDA_LEFT,
  SONDA_RIGHT
} from "../actions/sondas_action";

export default function SondasReducer(state = [], action) {
  switch (action.type) {
    case SONDA_ADD:
      return [...state, action.payload];
      break;
    case SONDA_MOVE:
      var { index, sonda, config, sondas } = action.payload;

      const coordenadas = _.reduce(sondas, (result, value, key) => {
        (result['x'] || (result['x'] = [])).push(value.currentX);
        (result['y'] || (result['y'] = [])).push(value.currentY);
        return result;
      }, {});

      sonda.move(config, coordenadas);
      return [...state];
      break;
    case SONDA_LEFT:
      var { index, sonda } = action.payload;
      sonda.left();
      return [...state];
      break;
    case SONDA_RIGHT:
      var { index, sonda } = action.payload;
      sonda.right();
      return [...state];
      break;
  }
  return state;
}
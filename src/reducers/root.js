import { combineReducers } from 'redux';
import SondasReducer from './sondas_reducer';
import ConfigReducer from './config_reducer';

const rootReducer = combineReducers({
  sondas: SondasReducer,
  config: ConfigReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import inventory from './inventory_reducer';
import material from './material_reducer';

export default combineReducers({
  inventory,
  material,
});

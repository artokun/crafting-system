import { combineReducers } from 'redux';
import inventory from './inventory_reducer';
import crafting from './crafting_reducer';
import material from './material_reducer';

export default combineReducers({
  inventory,
  crafting,
  material,
});

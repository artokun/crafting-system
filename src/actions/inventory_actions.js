import * as types from './types';

export const addInventory = name => (dispatch, getState) => {
  const { material } = getState();
  const error = `'${name}' is not a valid inventory name.`;

  return material[name]
    ? dispatch({ type: types.ADD_INVENTORY, payload: material[name] })
    : dispatch({ type: types.ADD_INVENTORY_FAIL, payload: { error } });
};

export const sortInventory = key => ({
  type: types.SORT_INVENTORY,
  payload: key,
});

export const highlightInventorySpot = index => ({
  type: types.HIGHLIGHT_INVENTORY_SPOT,
  payload: index,
});

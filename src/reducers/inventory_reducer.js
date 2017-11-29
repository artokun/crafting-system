import _ from 'lodash';
import * as types from '../actions/types';

const initialState = {
  slots: Array(32).fill(null),
  selected: null,
};

const addToInventory = (state, payload) => {
  const stateCopy = { ...state };
  const itemIndex = _.findIndex(
    stateCopy.slots,
    el => _.isObject(el) && el.name === payload.name,
  );

  if (itemIndex >= 0) {
    stateCopy.slots[itemIndex].quantity += 1;
  } else {
    const nullIndex = _.findIndex(stateCopy.slots, el => _.isNull(el));
    stateCopy.slots[nullIndex] = { ...payload, quantity: 1 };
  }

  return stateCopy;
};

const sortByKey = (state, key) => {
  const stateCopy = { ...state };
  const slots = _.sortBy(stateCopy.slots, [
    o => (_.isObject(o) ? o[key] : 9999),
  ]);
  stateCopy.slots = slots;
  return stateCopy;
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_INVENTORY:
      return addToInventory(state, payload);
    case types.SORT_INVENTORY:
      return sortByKey(state, payload);
    default:
      return state;
  }
}

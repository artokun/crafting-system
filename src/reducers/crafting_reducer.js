import _ from 'lodash';
import * as types from '../actions/types';

const initialState = {
  slots: Array(9).fill(null),
  selected: null,
};

const addToCrafting = (state, payload) => {
  const stateCopy = { ...state };
  const itemIndex = _.findIndex(
    stateCopy.slots,
    el => _.isObject(el) && el.name === payload.name,
  );

  if (itemIndex >= 0) {
    stateCopy.slots[itemIndex].quantity += 1;
  } else {
    const nullIndex = _.findIndex(stateCopy, el => _.isNull(el));
    stateCopy.slots[nullIndex] = { ...payload, quantity: 1 };
  }

  return stateCopy;
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_CRAFTING:
      return addToCrafting(state, payload);
    case types.HIGHLIGHT_CRAFTING_SPOT:
      return { ...state, selected: payload };
    default:
      return state;
  }
}

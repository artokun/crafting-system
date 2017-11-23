import _ from 'lodash';
import * as types from '../actions/types';

const initialState = Array(32).fill(null);

const addToInventory = (state, payload) => {
  const stateCopy = [...state];
  const itemIndex = _.findIndex(
    stateCopy,
    el => _.isObject(el) && el.name === payload.name
  );

  if (itemIndex >= 0) {
    stateCopy[itemIndex].quantity += 1;
  } else {
    const nullIndex = _.findIndex(stateCopy, el => _.isNull(el));
    stateCopy[nullIndex] = { ...payload, quantity: 1 };
  }

  return stateCopy;
};

const sortByKey = (state, key) =>
  _.sortBy([...state], [o => (_.isObject(o) ? o[key] : 9999)]);

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

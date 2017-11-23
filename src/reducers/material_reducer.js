// import * as types from 'actions/types';

// possibly fetch updated material list from online database
const initialState = {
  m_stick: {
    name: 'Wooden Stick',
    sprite: 'assets/stick.gif',
    description: 'A small branch that fell from a tree',
    type: 'material',
    rarity: 1,
    value: 1,
  },
  m_stone: {
    name: 'Round Stone',
    sprite: 'assets/stone.gif',
    description: 'A smooth round river rock',
    type: 'material',
    rarity: 1,
    value: 1,
  },
  m_rabbit_hide: {
    name: 'Rabbit Hide',
    sprite: 'assets/leather.gif',
    description: 'A tough uncured rabbit hide',
    type: 'material',
    rarity: 2,
    value: 5,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

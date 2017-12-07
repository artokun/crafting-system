import * as types from './types';

export const highlightCraftingSpot = index => ({
  type: types.HIGHLIGHT_CRAFTING_SPOT,
  payload: index,
});

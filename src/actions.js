import * as types from './ActionTypes';

export const playGame = () => {
  return {
    type: types.PLAY_GAME
  };
};
export const winGame = () => {
  return {
    type: types.WIN_GAME
  };
};

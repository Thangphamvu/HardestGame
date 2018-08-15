import * as types from '../ActionTypes';
let initialState = {
  isPlaying: false,
  isWin: false
};

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAY_GAME:
      return { ...state, isPlaying: true };
    case types.WIN_GAME:
      return { ...state, isWin: true };
    default:
      return state;
  }
};

export default myReducer;

import { GlobalAction, GlobalState, SET_SHOW_PLAY_LIST } from '../types/globalTypes';

const initialState: GlobalState = {
  showPlayList: true,
};

const globalReducer = (state = initialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case SET_SHOW_PLAY_LIST:
      return {
        ...state,
        showPlayList: action?.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;

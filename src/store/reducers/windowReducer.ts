import { WindowAction, WindowState, SET_WIDTH } from '../types/windowTypes';

const initialState: WindowState = {
  width: 0,
};

const windowReducer = (state = initialState, action: WindowAction): WindowState => {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        width: action?.payload,
      };
    default:
      return state;
  }
};

export default windowReducer;

import { MediaAction, MediaState, SET_MUTED, SET_VOLUME } from '../types/mediaTypes';

const initialState: MediaState = {
  volume: 100,
  muted: false
};

const mediaReducer = (state = initialState, action: MediaAction): MediaState => {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volume: action?.payload,
      };
    case SET_MUTED:
      return {
        ...state,
        muted: action?.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;

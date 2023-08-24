import _ from 'lodash';
import { MediaAction, MediaState, SET_ID_PLAY, SET_MUTED, SET_VOLUME } from '../types/mediaTypes';
import data from '@/data/mp3/trend/data.json'

const initialState: MediaState = {
  volume: 100,
  muted: false,
  id: _.sampleSize(data, 1)[0],
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
    case SET_ID_PLAY:
      return {
        ...state,
        id: action?.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;

import _ from 'lodash';
import { MediaAction, MediaState, SET_ID_PLAY, SET_MUTED, SET_PLAY_LIST, SET_VOLUME, SET_RANDOM, SET_RECENT_PLAY, SET_CAN_PLAY, SET_PLAYING, SET_AUDIO_REF } from '../types/mediaTypes';
import data from '@/data/mp3/trend/data.json'

const initialState: MediaState = {
  volume: 100,
  muted: false,
  id: null,
  playList: [],
  random: false,
  recentPlay: [],
  canPlay: false,
  isPlaying: false,
  audioRef: null,
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
    case SET_RANDOM:
      return {
        ...state,
        random: action?.payload,
      };
    case SET_ID_PLAY:
      return {
        ...state,
        id: action?.payload,
      };
    case SET_PLAY_LIST:
      return {
        ...state,
        playList: action?.payload,
      };
    case SET_RECENT_PLAY:
      return {
        ...state,
        recentPlay: action?.payload,
      };
    case SET_CAN_PLAY:
      return {
        ...state,
        canPlay: action?.payload,
      };
    case SET_PLAYING:
      return {
        ...state,
        isPlaying: action?.payload,
      };
    case SET_AUDIO_REF:
      return {
        ...state,
        audioRef: action?.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;

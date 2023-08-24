import { SET_ID_PLAY, SET_MUTED, SET_PLAY_LIST, SET_VOLUME, SET_RANDOM, SET_RECENT_PLAY } from '../types/mediaTypes';

export const setVolume = (volume: number) => {
  return {
    type: SET_VOLUME,
    payload: volume,
  };
};

export const setMuted = (muted: boolean) => {
  return {
    type: SET_MUTED,
    payload: muted,
  };
};

export const setRandom = (random: boolean) => {
  return {
    type: SET_RANDOM,
    payload: random,
  };
};

export const setIdPlay = (id: any) => {
  return {
    type: SET_ID_PLAY,
    payload: id,
  };
};

export const setPlayList = (id: any[]) => {
  return {
    type: SET_PLAY_LIST,
    payload: [...id],
  };
};

export const setRecentPlay = (id: any[]) => {
  return {
    type: SET_RECENT_PLAY,
    payload: id,
  };
};
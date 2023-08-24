import { SET_ID_PLAY, SET_MUTED, SET_VOLUME } from '../types/mediaTypes';

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

export const setIdPlay = (id: any) => {
  return {
    type: SET_ID_PLAY,
    payload: id,
  };
};
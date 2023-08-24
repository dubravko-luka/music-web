import { SET_MUTED, SET_VOLUME } from '../types/mediaTypes';

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
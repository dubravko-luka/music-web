import { SET_ID_PLAY, SET_MUTED, SET_PLAY_LIST, SET_VOLUME, SET_RANDOM, SET_RECENT_PLAY, SET_CAN_PLAY, SET_PLAYING, SET_AUDIO_REF } from '../types/mediaTypes';

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

export const setCanPlay = (canPlay: boolean) => {
  return {
    type: SET_CAN_PLAY,
    payload: canPlay,
  };
};

export const setPlaying = (playing: boolean) => {
  return {
    type: SET_PLAYING,
    payload: playing,
  };
};

export const setAudioRef = (ref: any) => {
  return {
    type: SET_AUDIO_REF,
    payload: ref,
  };
};
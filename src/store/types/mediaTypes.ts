export const SET_VOLUME = 'SET_VOLUME';
export const SET_MUTED = 'SET_MUTED';
export const SET_ID_PLAY = 'SET_ID_PLAY';
export const SET_PLAY_LIST = 'SET_PLAY_LIST';
export const SET_RANDOM = 'SET_RANDOM';

export interface MediaState {
  volume: number;
  muted: boolean;
  id: any;
  playList: any[];
  random: boolean;
}

interface setVolumeAction {
  type: typeof SET_VOLUME;
  payload: number;
}

interface setMutedAction {
  type: typeof SET_MUTED;
  payload: boolean;
}

interface setIdPlay {
  type: typeof SET_ID_PLAY;
  payload: any;
}

interface setPlayList {
  type: typeof SET_PLAY_LIST;
  payload: any[];
}


interface setRandom {
  type: typeof SET_RANDOM;
  payload: boolean;
}

export type MediaAction = setVolumeAction | setMutedAction | setIdPlay | setPlayList | setRandom;

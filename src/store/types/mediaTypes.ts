export const SET_VOLUME = 'SET_VOLUME';
export const SET_MUTED = 'SET_MUTED';
export const SET_ID_PLAY = 'SET_ID_PLAY';

export interface MediaState {
  volume: number;
  muted: boolean;
  id: any;
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

export type MediaAction = setVolumeAction | setMutedAction | setIdPlay;

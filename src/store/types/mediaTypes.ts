export const SET_VOLUME = 'SET_VOLUME';
export const SET_MUTED = 'SET_MUTED';

export interface MediaState {
  volume: number;
  muted: boolean;
}

interface setVolumeAction {
  type: typeof SET_VOLUME;
  payload: number;
}

interface setMutedAction {
  type: typeof SET_MUTED;
  payload: boolean;
}

export type MediaAction = setVolumeAction | setMutedAction;

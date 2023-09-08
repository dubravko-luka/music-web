export const SET_VOLUME = 'SET_VOLUME';
export const SET_MUTED = 'SET_MUTED';
export const SET_ID_PLAY = 'SET_ID_PLAY';
export const SET_PLAY_LIST = 'SET_PLAY_LIST';
export const SET_RANDOM = 'SET_RANDOM';
export const SET_RECENT_PLAY = 'SET_RECENT_PLAY';
export const SET_CAN_PLAY = 'SET_CAN_PLAY';
export const SET_AUDIO_REF = 'SET_AUDIO_REF';
export const SET_PLAYING = 'SET_PLAYING';

export interface MediaState {
  volume: number;
  muted: boolean;
  id: any;
  playList: any[];
  random: boolean;
  recentPlay: any[];
  canPlay: boolean;
  isPlaying: boolean;
  audioRef: any;
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

interface setRecentPlay {
  type: typeof SET_RECENT_PLAY;
  payload: any[];
}

interface setCanPlay {
  type: typeof SET_CAN_PLAY;
  payload: boolean;
}

interface setPlaying {
  type: typeof SET_PLAYING;
  payload: boolean;
}

interface setAudioRef {
  type: typeof SET_AUDIO_REF;
  payload: any;
}

export type MediaAction = setVolumeAction | setMutedAction | setIdPlay | setPlayList | setRandom | setRecentPlay | setCanPlay | setPlaying | setAudioRef;

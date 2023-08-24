export const SET_SHOW_PLAY_LIST = 'SET_SHOW_PLAY_LIST';

export interface GlobalState {
  showPlayList: boolean;
}

interface setShowPlayListAction {
  type: typeof SET_SHOW_PLAY_LIST;
  payload: boolean;
}

export type GlobalAction = setShowPlayListAction;

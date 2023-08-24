import { SET_SHOW_PLAY_LIST } from '../types/globalTypes';

export const setShowPlaylist = (show: boolean) => {
  return {
    type: SET_SHOW_PLAY_LIST,
    payload: show,
  };
};
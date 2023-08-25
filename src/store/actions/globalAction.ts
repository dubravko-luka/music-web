import { SET_SHOW_PLAY_LIST, SET_SHOW_FULL_PAGE, SET_BACK_GROUND_FULL_PAGE, SET_IMG_MAIN_FULL_PAGE, SET_SHOW_MAIN_IMG, SET_SHOW_SEARCH, SET_SHOW_BACKGROUND } from '../types/globalTypes';

export const setShowPlaylist = (show: boolean) => {
  return {
    type: SET_SHOW_PLAY_LIST,
    payload: show,
  };
};

export const setShowFullPage = (show: boolean) => {
  return {
    type: SET_SHOW_FULL_PAGE,
    payload: show,
  };
};

export const setBackgroundFullPage = (bg: string) => {
  return {
    type: SET_BACK_GROUND_FULL_PAGE,
    payload: bg,
  };
};

export const setImgMainFullPage = (bg: string) => {
  return {
    type: SET_IMG_MAIN_FULL_PAGE,
    payload: bg,
  };
};

export const setShowMainImg = (show: boolean) => {
  return {
    type: SET_SHOW_MAIN_IMG,
    payload: show,
  };
};

export const setShowBackground = (show: boolean) => {
  return {
    type: SET_SHOW_BACKGROUND,
    payload: show,
  };
};

export const setShowSearch = (show: boolean) => {
  return {
    type: SET_SHOW_SEARCH,
    payload: show,
  };
};
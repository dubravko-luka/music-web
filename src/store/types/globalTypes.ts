export const SET_SHOW_PLAY_LIST = 'SET_SHOW_PLAY_LIST';
export const SET_SHOW_FULL_PAGE = 'SET_SHOW_FULL_PAGE';
export const SET_BACK_GROUND_FULL_PAGE = 'SET_BACK_GROUND_FULL_PAGE';
export const SET_IMG_MAIN_FULL_PAGE = 'SET_IMG_MAIN_FULL_PAGE';
export const SET_SHOW_MAIN_IMG = 'SET_SHOW_MAIN_IMG';
export const SET_SHOW_BACKGROUND = 'SET_SHOW_BACKGROUND';
export const SET_SHOW_SEARCH = 'SET_SHOW_SEARCH';
export const SET_SHOW_CONTROL = 'SET_SHOW_CONTROL';
export const SET_ENABLED_INPUT_SEARCH = 'SET_ENABLED_INPUT_SEARCH';

export interface GlobalState {
  showPlayList: boolean;
  fullPage: boolean;
  bgFullPage: string;
  imgMainFullPage: string;
  showImgMain: boolean;
  showBackground: boolean;
  showSearch: boolean;
  showControl: boolean;
  enabledInputSearch: boolean;
}

interface setShowPlayListAction {
  type: typeof SET_SHOW_PLAY_LIST;
  payload: boolean;
}

interface setShowFullPageAction {
  type: typeof SET_SHOW_FULL_PAGE;
  payload: boolean;
}

interface setShowSearch {
  type: typeof SET_SHOW_SEARCH;
  payload: boolean;
}

interface setBackgroundFullPage {
  type: typeof SET_BACK_GROUND_FULL_PAGE;
  payload: string;
}

interface setImgMainFullPage {
  type: typeof SET_IMG_MAIN_FULL_PAGE;
  payload: string;
}

interface setShowMainImg {
  type: typeof SET_SHOW_MAIN_IMG;
  payload: boolean;
}

interface setShowBgImg {
  type: typeof SET_SHOW_BACKGROUND;
  payload: boolean;
}

interface setShowControl {
  type: typeof SET_SHOW_CONTROL;
  payload: boolean;
}

interface setEnabledInputSearch {
  type: typeof SET_ENABLED_INPUT_SEARCH;
  payload: boolean;
}

export type GlobalAction = setShowPlayListAction | setShowFullPageAction | setBackgroundFullPage | setImgMainFullPage | setShowMainImg | setShowSearch | setShowBgImg | setShowControl | setEnabledInputSearch;

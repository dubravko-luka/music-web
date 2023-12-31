import { GlobalAction, GlobalState, SET_SHOW_PLAY_LIST, SET_SHOW_FULL_PAGE, SET_BACK_GROUND_FULL_PAGE, SET_IMG_MAIN_FULL_PAGE, SET_SHOW_MAIN_IMG, SET_SHOW_SEARCH, SET_SHOW_BACKGROUND, SET_SHOW_CONTROL, SET_ENABLED_INPUT_SEARCH } from '../types/globalTypes';

const initialState: GlobalState = {
  showPlayList: true,
  fullPage: false,
  bgFullPage: '',
  imgMainFullPage: '',
  showImgMain: true,
  showSearch: false,
  showBackground: true,
  showControl: true,
  enabledInputSearch: false
};

const globalReducer = (state = initialState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case SET_SHOW_PLAY_LIST:
      return {
        ...state,
        showPlayList: action?.payload,
      };
    case SET_SHOW_FULL_PAGE:
      return {
        ...state,
        fullPage: action?.payload,
      };
    case SET_BACK_GROUND_FULL_PAGE:
      return {
        ...state,
        bgFullPage: action?.payload,
      };
    case SET_IMG_MAIN_FULL_PAGE:
      return {
        ...state,
        imgMainFullPage: action?.payload,
      };
    case SET_SHOW_MAIN_IMG:
      return {
        ...state,
        showImgMain: action?.payload,
      };
    case SET_SHOW_SEARCH:
      return {
        ...state,
        showSearch: action?.payload,
      };
    case SET_SHOW_BACKGROUND:
      return {
        ...state,
        showBackground: action?.payload,
      };
    case SET_SHOW_CONTROL:
      return {
        ...state,
        showControl: action?.payload,
      };
    case SET_ENABLED_INPUT_SEARCH:
      return {
        ...state,
        enabledInputSearch: action?.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;

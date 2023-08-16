import { Dispatch } from 'redux';
import { SET_WIDTH, WindowAction } from '../types/windowTypes';

export const setWidth = (width: number) => {
  return (dispatch: Dispatch<WindowAction>) => {
    dispatch({ type: SET_WIDTH, payload: width });
  };
};
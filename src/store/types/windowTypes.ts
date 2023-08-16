export const SET_WIDTH = 'SET_WIDTH';

export interface WindowState {
  width: number;
}

interface setWindowWidthAction {
  type: typeof SET_WIDTH;
  payload: number;
}

export type WindowAction = setWindowWidthAction;

import { GlobalState } from './globalTypes';
import { MediaState } from './mediaTypes';
import { WindowState } from './windowTypes';

export interface RootState {
  window: WindowState;
  global: GlobalState;
  media: MediaState;
}

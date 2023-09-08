import { RootState } from "@/store/types";
import { useDispatch, useSelector } from "react-redux";
import { usePlay } from "@/hooks/usePlay";
import { KEYCODE_STRING } from "@/types/enum";
import { setEnabledInputSearch, setShowSearch } from "@/store/actions/globalAction";

export const useKeyPress = () => {

  const enabledInputSearch = useSelector((state: RootState) => state?.global?.enabledInputSearch);
  const dispatch = useDispatch();
  const { onPlay } = usePlay();

  /**
   * Play with enter `SPACE`
   * @param event 
   * @param audioRef 
   */
  const onPlayKeyPress = async (event: any, audioRef: any) => {
    if (event.keyCode === KEYCODE_STRING.SPACE && !enabledInputSearch) {
      onPlay(audioRef);
    }
  };

  /**
   * 
   * @param event 
   */
  const pauseKeyPress = (event: any) => {
    if (!enabledInputSearch) {
      event.preventDefault();
    }
  };

  /**
   * Enabled box search
   * @param event 
   * @param refInputSeach 
   */
  const onShowSearchKeyPress = (event: any, refInputSeach: any) => {
    if (event.keyCode === KEYCODE_STRING.VIRGULE && !enabledInputSearch) {
      dispatch(setShowSearch(true));
      dispatch(setEnabledInputSearch(true))
      refInputSeach.current.focus();
      event.preventDefault();
    }
  }

  return {
    onPlayKeyPress,
    pauseKeyPress,
    onShowSearchKeyPress
  };
};

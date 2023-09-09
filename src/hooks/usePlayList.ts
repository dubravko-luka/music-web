import { savePlayList } from "@/helpers/common";
import { ALL_LIST_MUSIC, LOCALSTORAGE_PLAY_LIST } from "@/helpers/constants";
import { setPlayList } from "@/store/actions/mediaAction";
import { RootState } from "@/store/types";
import { useDispatch, useSelector } from "react-redux";

export const usePlayList = () => {

  const dispatch = useDispatch();
  const playList = useSelector((state: RootState) => state?.media?.playList);

  /**
   * Add Song to Play llist
   * @param song 
   */
  const onAddPlayList = async (song: any) => {
    const _playList = [...playList];

    const songIndex = _playList.findIndex(item => item.encodeId === song.encodeId);

    if (songIndex !== -1) {
      _playList.splice(songIndex, 1);
    } else {
      _playList.push({ ...song });
    }

    dispatch(setPlayList([..._playList]));
    onSavePlayList(song.encodeId)
  }

  /**
   * Save Recent Play in localstorage
   */
  const onSavePlayList = async (encodeId: string) => {
    await savePlayList(encodeId);
  }

  const getPlayList = async () => {
    const storedArray = await JSON.parse(localStorage.getItem(LOCALSTORAGE_PLAY_LIST) as string) || [];
    const recent = await ALL_LIST_MUSIC.filter((item) => storedArray.includes(item.encodeId));

    const seenIds = new Set();
    const array_eraser: any[] = []

    await recent.forEach(item => {
      if (!seenIds.has(item.encodeId)) {
        array_eraser.push(item);
        seenIds.add(item.encodeId);
      }
    })
    await dispatch(setPlayList([...array_eraser]))
  }

  const clearPlaylist = () => {
    localStorage.removeItem(LOCALSTORAGE_PLAY_LIST)
    dispatch(setPlayList([]));
  }

  return {
    onAddPlayList,
    getPlayList,
    clearPlaylist
  };
};

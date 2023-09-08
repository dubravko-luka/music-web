import { saveHeardRecently } from "@/helpers/common";
import { ALL_LIST_MUSIC } from "@/helpers/constants";
import { setIdPlay, setPlaying, setRecentPlay } from "@/store/actions/mediaAction";
import { RootState } from "@/store/types";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

export const usePlay = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);
  const volume = useSelector((state: RootState) => state?.media?.volume);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const playList = useSelector((state: RootState) => state?.media?.playList);

  /**
   * Save Recent Play in localstorage
   */
  const saveRecentPlay = async () => {
    const storedArray: any = await saveHeardRecently(idPlay?.encodeId);
    const recent = await ALL_LIST_MUSIC.filter((item) => storedArray.includes(item.encodeId));

    const seenIds = new Set();
    const array_eraser: any[] = []

    await recent.forEach(item => {
      if (!seenIds.has(item.encodeId)) {
        array_eraser.push(item);
        seenIds.add(item.encodeId);
      }
    })
    await dispatch(setRecentPlay([...array_eraser]))
  }

  /**
   * Play song
   * @param audioRef 
   */
  const onPlay = async (audioRef: any) => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = volume / 100;
      saveRecentPlay()
    }
    dispatch(setPlaying(!isPlaying));
  };

  /**
   * Loop current song
   * @param audioRef 
   */
  const onLoop = async (audioRef: any) => {
    audioRef.current.loop = !audioRef.current.loop;
  };

  /**
   * Random song in all list song
   */
  const randomInAllSong = () => {
    const randomMusic = _.sampleSize(ALL_LIST_MUSIC, 1);
    dispatch(setIdPlay(randomMusic[0]));
  }

  /**
   * Next play
   * If playlist exist then play next in playlist
   * else play random in all song
   */
  const onNext = async () => {
    const songIndex = playList.findIndex(item => item.encodeId === idPlay.encodeId);
    if (playList[songIndex + 1]) {
      dispatch(setIdPlay(playList[songIndex + 1]))
    } else {
      randomInAllSong()
    }
  }

  /**
   * Prev play with playlist exist
   */
  const onPrev = () => {
    const songIndex = playList.findIndex(item => item.encodeId === idPlay.encodeId);
    if (playList[songIndex - 1]) {
      dispatch(setIdPlay(playList[songIndex - 1]))
    }
  }

  return {
    onPlay,
    saveRecentPlay,
    onLoop,
    onNext,
    onPrev,
    randomInAllSong
  };
};

import React, { memo, useEffect, useState } from 'react';
import HeadPlay from '../Common/HeadPlay';
import EventListener from 'react-event-listener';
import { usePlay } from '@/hooks/usePlay';
import { useKeyPress } from '@/hooks/useKeyPress';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setCanPlay, setIdPlay, setPlaying, setRandom } from '@/store/actions/mediaAction';
import InputRange from 'react-input-range';
import { formatTimePlay } from '@/helpers/common';
import styles from './styles.module.css'
import Svg from '../Common/Svg';
type AudioProps = {
  audioRef: any
}

const Audio: React.FC<AudioProps> = ({ audioRef }) => {

  const { onPlay, saveRecentPlay, onLoop, onNext, onPrev, randomInAllSong } = usePlay();
  const { onPlayKeyPress } = useKeyPress()

  const [currentTime, setCurrentTime] = useState(0);
  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);
  const playList = useSelector((state: RootState) => state?.media?.playList);
  const canPlay = useSelector((state: RootState) => state?.media?.canPlay);
  const randomSong = useSelector((state: RootState) => state?.media?.random);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const dispatch = useDispatch();

  const handleTimeUpdate = () => {
    if (audioRef.ended) {
      dispatch(setPlaying(false))
    }
    setCurrentTime(Math.floor(audioRef.current.currentTime));
  };

  const onChangeTime = (e: any) => {
    audioRef.current.currentTime = e;
    setCurrentTime(e);
  }

  const handleCanPlayThrough = () => {
    dispatch(setCanPlay(true))
  }

  const handleEnd = () => {
    // Random song curent enabled
    if (randomSong) {
      // Playlist no exist or only 1 song
      if (playList.length <= 1) {
        randomInAllSong()
      } else {
        // Random in playlist
        const filteredArray = playList.filter(item => item.encodeId !== idPlay?.encodeId);
        const randomIndex = Math.floor(Math.random() * filteredArray.length);
        const newRand = filteredArray[randomIndex];
        dispatch(setIdPlay(newRand));
      }
    } else if (!audioRef?.current?.loop && playList?.length > 0) {
      /**
       * Random song disabled
       * Loop song disabled
       * Playlist > 0
       */
      const songIndex = playList.findIndex(item => item.encodeId === idPlay.encodeId);

      /**
       * Check if playlist with current index + 1
       * if exists play next
       * else random and play
       */
      if (playList[songIndex + 1]) {
        dispatch(setIdPlay(playList[songIndex + 1]))
      } else {
        randomInAllSong()
      }
    } else {
      randomInAllSong()
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      saveRecentPlay();
      dispatch(setCanPlay(false));
    }
  }, [idPlay])

  return (
    <>
      <EventListener target="window" onKeyDown={(event: any) => onPlayKeyPress(event, audioRef)} />
      <HeadPlay />
      <div className={`${styles.controlPlay} h-full flex items-center`}>
        <div className='w-full timeSong'>
          <div className="flex gap-2">
            <span className={`${styles.timeSong} text-xs text-gray-300`}>{formatTimePlay(Number(currentTime))}</span>
            <InputRange
              formatLabel={() => ""}
              maxValue={idPlay.duration as number ?? 0}
              minValue={0}
              step={1}
              value={currentTime}
              onChange={onChangeTime}
            />
            <span className={`${styles.timeSong} text-xs text-gray-300`}>{formatTimePlay(idPlay.duration as number ?? 0)}</span>
          </div>
          <div className="flex justify-center items-center gap-x-10 my-2">
            <div
              className={`${styles.action} ${randomSong ? styles.strokeActive : ''}`}
              onClick={() => dispatch(setRandom(!randomSong))}
            >
              <Svg name='mix' path='icons' />
            </div>
            <div
              className={`${styles.action} ${playList.findIndex(item => item.encodeId === idPlay.encodeId) - 1 < 0 ? styles.disabled : ''}`}
              onClick={onPrev}
            >
              <Svg name='prev' path='icons' />
            </div>
            <div className={`${styles.actionPlay}`} onClick={() => onPlay(audioRef)} style={{ display: isPlaying && canPlay ? 'block' : 'none' }}>
              <Svg name='pause' path='icons' />
            </div>
            <div className={`${styles.actionPlay}`} onClick={() => onPlay(audioRef)} style={{ display: !isPlaying && canPlay ? 'block' : 'none' }}>
              <Svg name='play' path='icons' />
            </div>
            <div className={`${styles.canPlay}`} style={{ display: canPlay ? 'none' : 'block' }}>
              <Svg name='loading-play' path='icons' />
            </div>
            <div className={`${styles.action}`} onClick={onNext}>
              <Svg name='next' path='icons' />
            </div>
            <div
              className={`${styles.action} ${audioRef?.current?.loop ? styles.active : ''}`}
              onClick={() => onLoop(audioRef)}
            >
              <Svg name='loop' path='icons' />
            </div>
          </div>
        </div>
      </div>
      <audio
        id="audio"
        className={`${styles.audio}`}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onCanPlayThrough={handleCanPlayThrough}
        onEnded={handleEnd}
        onPause={() => dispatch(setPlaying(false))}
        onPlay={() => dispatch(setPlaying(true))}
      >
        <source
          src={`/audio/${idPlay?.encodeId}/128`}
          type="audio/mp3"
        />
      </audio>
    </>
  )
}

export default memo(Audio);

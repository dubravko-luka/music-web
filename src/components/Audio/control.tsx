import React, { memo } from 'react';
import Svg from '../Common/Svg';
import { setRandom } from '@/store/actions/mediaAction';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'
import { RootState } from '@/store/types';
import { usePlay } from '@/hooks/usePlay';

type Props = {
  //
};

const Control: React.FC<Props> = () => {

  const dispatch = useDispatch();
  const { onPlay, onLoop, onNext, onPrev } = usePlay();

  const randomSong = useSelector((state: RootState) => state?.media?.random);
  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);
  const canPlay = useSelector((state: RootState) => state?.media?.canPlay);
  const playList = useSelector((state: RootState) => state?.media?.playList);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const audioRef = useSelector((state: RootState) => state?.media?.audioRef);

  return (
    <>
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
    </>
  );
};

export default memo(Control);

import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import TimeAgo from '@/components/Common/TimeAgo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setIdPlay } from '@/store/actions/mediaAction';

type Props = {
  song: any
};

const MusicCardRectangle: React.FC<Props> = ({ song }) => {

  const dispatch = useDispatch()
  const idPlay = useSelector((state: RootState) => state?.media?.id);

  return (
    <>
      <div className={`${styles.wrapper} ${idPlay && idPlay?.encodeId === song.encodeId ? styles.playing : ''}`}>
        <div className="grid grid-cols-12 gap-2 p-2 items-center">
          <div className={`col-span-12 flex items-center gap-2`} onClick={() => dispatch(setIdPlay(song))}>
            <div className={`${styles.figure} relative`}>
              {
                idPlay && idPlay?.encodeId === song.encodeId
                  ? (
                    <div className={styles.iconPlaying}>
                      <img src="/images/gif/icon-playing.gif" alt="" />
                    </div>
                  )
                  : (
                    <div className={styles.iconPlay}>
                      <Svg name='play' path='icons' />
                    </div>
                  )
              }
              <img className='w-full h-full object-cover' src={song?.thumbnail} alt="" />
            </div>
            <div>
              <p className={`${styles.info} text-sm text-white font-bold`}>{song?.title}</p>
              <p className={`${styles.info} text-gray-500 text-xs`}>{song?.artistsNames}</p>
              <p className={`${styles.info} text-gray-500 text-xs`}>
                <TimeAgo timestamp={song?.releaseDate} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MusicCardRectangle);

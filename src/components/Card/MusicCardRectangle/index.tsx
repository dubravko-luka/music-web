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
          <div className={`col-span-2`} onClick={() => dispatch(setIdPlay(song))}>
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
              <img src={song?.thumbnail} alt="" />
            </div>
          </div>
          <div className="col-span-9" onClick={() => dispatch(setIdPlay(song))}>
            <p className={`${styles.info} text-sm text-white font-bold`}>{song?.title}</p>
            <p className={`${styles.info} text-gray-500 text-xs`}>{song?.artistsNames}</p>
            <p className={`${styles.info} text-gray-500 text-xs`}>
              <TimeAgo timestamp={song?.releaseDate} />
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <div className={`${styles.showOption} relative`}>
              <Svg name='dot-vertical' path='icons' />
              <div className={`${styles.options}`}>
                <div className={`${styles.optionItem} flex items-center gap-2`}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='add-playlist' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Thêm vào danh sách phát</p>
                </div>
                <div className={`${styles.optionItem} flex items-center gap-2`}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='download' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Tải xuống</p>
                </div>
                <div className={`${styles.optionItem} flex items-center gap-2`}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='share' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Chia sẻ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MusicCardRectangle);

import React, { memo, useEffect } from 'react';
import styles from './styles.module.css'
import MusicCardRectangle2 from '@/components/Card/MusicCardRectangle-2';
import Line from '@/components/Common/Line';
import Svg from '@/components/Common/Svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setShowPlaylist } from '@/store/actions/globalAction';

type Props = {
  //
};

const Playlist: React.FC<Props> = () => {

  const dispatch = useDispatch();
  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList)
  const width = useSelector((state: RootState) => state?.window?.width)
  const idPlay = useSelector((state: RootState) => state?.media?.id)
  const playList = useSelector((state: RootState) => state?.media?.playList)

  return (
    <>
      <div className={`${styles.list}`}>
        {
          width < 768
            ? (
              <div
                className={`${styles.showHidePlayList} ${showPlayList ? styles.show : ''}`}
                onClick={() => dispatch(setShowPlaylist(!showPlayList))}
              >
                <Svg name='play-list' path='icons' />
              </div>
            ) : (
              <></>
            )
        }
        <p className='text-white text-sm font-bold mb-3 px-2.5'>Đang phát</p>
        <MusicCardRectangle2 song={idPlay} />
      </div>
      <div className="py-5">
        <Line />
      </div>
      <div className={`${styles.list}`}>
        <p className='text-white text-sm font-bold mb-3'>Tiếp theo</p>
        <div className={`${styles.contentPlayList} flex items-start justify-start no-sb`}>
          <div className={`grid grid-cols-12 items-start gap-y-3 no-sb`}>
            {
              playList.length === 0
                ? (
                  <div className={`col-span-12 ${styles.nextItem}`}>
                    <MusicCardRectangle2 song={idPlay} />
                  </div>
                ) : (
                  <></>
                )
            }
            {
              playList?.map((item, index) => (
                <div className={`col-span-12 ${styles.nextItem}`} key={index}>
                  <MusicCardRectangle2 song={item} key={index} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Playlist);

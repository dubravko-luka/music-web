import React, { memo, useEffect } from 'react';
import styles from './styles.module.css'
import MusicCardRectangle2 from '@/components/Card/MusicCardRectangle-2';
import Line from '@/components/Common/Line';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { usePlayList } from '@/hooks/usePlayList';

type Props = {
  //
};

const Playlist: React.FC<Props> = () => {

  const { getPlayList, clearPlaylist } = usePlayList()

  const idPlay = useSelector((state: RootState) => state?.media?.id)
  const playList = useSelector((state: RootState) => state?.media?.playList);

  useEffect(() => {
    getPlayList()
  }, [])

  const onClearPlayList = () => {
    clearPlaylist()
  }

  return (
    <>
      <div className={`${styles.list}`}>
        <p className='text-white text-sm font-bold mb-3 px-2.5'>Đang phát</p>
        <MusicCardRectangle2 song={idPlay} />
      </div>
      <div className="py-5">
        <Line />
      </div>
      <div className={`${styles.list}`}>
        <div className="flex items-center justify-between mb-3">
          <p className='text-white text-sm font-bold'>Tiếp theo</p>
          <button onClick={onClearPlayList} className={`${styles.clearPlaylist}`}>Xoá toàn bộ</button>
        </div>
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

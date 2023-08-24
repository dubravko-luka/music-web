import Trend from '@/components/Home/Trend';
import React, { memo, useEffect } from 'react';
import styles from './styles.module.css'
import Recently from '@/components/Home/Recently';
import NewRelease from '@/components/Home/NewRelease'
import TrendFavourite from '@/components/Home/TrendFavourite'
import Playlist from '@/components/Home/Playlist';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import KoreanMusic from '@/components/Home/KoreanMusic';
import { LOCALSTORAGE_HEARD_RECENLY } from '@/helpers/constants';
import koreanMusic from '@/data/mp3/korean-music/data.json'
import newRelease from '@/data/mp3/new-relase/data.json'
import trend from '@/data/mp3/trend/data.json'
import trendFavourite from '@/data/mp3/trend-favourite/data.json'
import { setRecentPlay } from '@/store/actions/mediaAction';

type Props = {
  //
};

const HomeContainer: React.FC<Props> = () => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList)
  const playRecent = useSelector((state: RootState) => state?.media?.recentPlay);

  const dispatch = useDispatch();

  const getRecently = async () => {
    const storedArray = await JSON.parse(localStorage.getItem(LOCALSTORAGE_HEARD_RECENLY) as string) || [];
    const recent = await [...koreanMusic, ...newRelease, ...trend, ...trendFavourite].filter((item) => storedArray.includes(item.encodeId));

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

  useEffect(() => {
    getRecently()
  }, [])

  return (
    <>
      <div className='pb-28'>
        <div className={`${styles.wrapSection} ${!showPlayList ? styles.show : ''}`}>
          {
            playRecent?.length > 0
              ? (
                <div className={`${styles.section} pt-5`}>
                  <p className={`${styles.titleSection}`}>Gần đây</p>
                  <Recently />
                </div>
              ) : (
                <></>
              )
          }
          <div className={`${styles.section} pt-10`}>
            <p className={`${styles.titleSection}`}>Xu Hướng</p>
            <Trend />
          </div>
          <div className={`${styles.section} pt-10`}>
            <p className={`${styles.titleSection}`}>Mới Phát Hành</p>
            <NewRelease />
          </div>
          <div className={`${styles.section} pt-10`}>
            <p className={`${styles.titleSection}`}>Top Yêu Thích</p>
            <TrendFavourite />
          </div>
          <div className={`${styles.section} pt-10`}>
            <p className={`${styles.titleSection}`}>Nhạc Hàn</p>
            <KoreanMusic />
          </div>
        </div>
        <div className={`${styles.playList} ${showPlayList ? styles.show : ''} z-9`}>
          <Playlist />
        </div>
      </div>
    </>
  );
};

export default memo(HomeContainer);

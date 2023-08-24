import TrendTikTok from '@/components/Home/TrendTikTok';
import React, { memo, useEffect } from 'react';
import styles from './styles.module.css'
import TrendingArtist from '@/components/Home/TrendingArtist';
import Recently from '@/components/Home/Recently';
import NewRelease from '@/components/Home/NewRelease'
import TrendFavourite from '@/components/Home/TrendFavourite'
import Playlist from '@/components/Home/Playlist';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { getRecommend } from '@/api/endpoints/recommend';

type Props = {
  //
};

const HomeContainer: React.FC<Props> = () => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList)

  return (
    <>
      <div>
        <div className={`${styles.wrapSection} ${!showPlayList ? styles.show : ''}`}>
          <div className={`${styles.section} pt-5`}>
            <p className={`${styles.titleSection}`}>Gần đây</p>
            <Recently />
          </div>
          <div className={`${styles.section} pt-10`}>
            <p className={`${styles.titleSection}`}>Xu Hướng TikTok</p>
            <TrendTikTok />
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
            <p className={`${styles.titleSection}`}>Nghệ Sĩ Thịnh Hành</p>
            <TrendingArtist />
          </div>
        </div>
        <div className={`${styles.playList} ${showPlayList ? styles.show : ''}`}>
          <Playlist />
        </div>
      </div>
    </>
  );
};

export default memo(HomeContainer);

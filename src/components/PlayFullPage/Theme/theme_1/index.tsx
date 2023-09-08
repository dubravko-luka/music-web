import React, { memo } from 'react';
import { extractLinkImgZingMp3 } from '@/helpers/common';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import styles from './styles.module.css';

type Props = {
  //
};

const ThemePlayFullPage1: React.FC<Props> = () => {

  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const imgMainFullPage = useSelector((state: RootState) => state?.global.imgMainFullPage);
  const showImgMain = useSelector((state: RootState) => state?.global.showImgMain);
  const width = useSelector((state: RootState) => state?.window.width);

  return (
    <>
      {
        showImgMain
          ? (
            <div
              className={`${styles.playPoster}`}
              style={{
                '--width': `${width > 700 ? 600 : width - 30}px`
              } as any}
            >
              <div className={`${styles.playPosterMain} ${isPlaying ? styles.play : ''}`}>
                <img
                  className={styles.playPosterImg}
                  src={imgMainFullPage ? imgMainFullPage : `/poster/${extractLinkImgZingMp3(idPlay?.thumbnailM)}`}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <></>
          )
      }
    </>
  );
};

export default memo(ThemePlayFullPage1);

import React, { memo, useEffect } from 'react';
import styles from './styles.module.css'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
  //
};

const PlayFullPage: React.FC<Props> = () => {
  const idPlay = useSelector((state: RootState) => state?.media?.id);

  return (
    <>
      <Helmet>
        <style>{`
          body {
            overflow: hidden;
          }
          .navigation, .go-top {
            z-index: -1;
          }
        `}</style>
      </Helmet>
      <div className={`${styles.wrapper} flex justify-center items-center`}>
        <div className={`${styles.playPoster}`}>
          <img
            className={styles.playPosterImg}
            src={idPlay?.thumbnailM}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default memo(PlayFullPage);

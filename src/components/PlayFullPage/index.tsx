import React, { memo, useEffect } from 'react';
import styles from './styles.module.css'
import { Helmet } from 'react-helmet';

type Props = {
  //
};

const PlayFullPage: React.FC<Props> = () => {

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
            src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_webp/cover/1/3/7/6/1376bcb516642f04d736b5aa2bdba687.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default memo(PlayFullPage);

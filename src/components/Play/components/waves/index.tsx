import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
  //
};

const Waves: React.FC<Props> = () => {

  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);
  const showControl = useSelector((state: RootState) => state?.global.showControl);

  return (
    <>
      <div className={`${styles.audioBlur} ${!showControl ? styles.show : ''} z-9`}>
        <div className={`${styles.wavesBlock} relative`}>
          <div className={`${styles.iconPlay}`}>
            <Svg name='play-1' path='icons' />
          </div>
          <div
            className={`${styles.wave_0} ${styles.waves}`}
            style={{
              animationPlayState: `${isPlaying ? 'running' : 'paused'}`
            }}
          />
          <div
            className={`${styles.wave_1} ${styles.waves}`}
            style={{
              animationPlayState: `${isPlaying ? 'running' : 'paused'}`
            }}
          />
          <div
            className={`${styles.wave_2} ${styles.waves}`}
            style={{
              animationPlayState: `${isPlaying ? 'running' : 'paused'}`
            }}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Waves);

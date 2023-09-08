import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
  //
};

const WaveBar: React.FC<Props> = () => {

  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);

  const [barsTime, setBarsTime] = useState<number[]>([]);

  const renderBarsTime = () => {
    const randomBarsTime: number[] = Array.from({ length: 30 }).map(() => {
      const time = Math.floor(Math.random() * 1000) + 900;
      return time;
    });
    setBarsTime(randomBarsTime);
  }

  useEffect(() => {
    if (barsTime.length === 0) {
      renderBarsTime()
    }
  }, [])

  return (
    <>
      <div className={`${styles.bars}`}>
        {
          new Array(30).fill(null).map((_, index) => (
            <div
              style={{
                left: `${index * 12}px`,
                animationDuration: `${barsTime[index]}ms`,
                animationPlayState: isPlaying ? 'running' : 'paused',
              } as any}
              key={index}
              className={`${styles.bar}`}
            />
          ))
        }
      </div>

    </>
  );
};

export default memo(WaveBar);

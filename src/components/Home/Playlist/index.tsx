import React, { memo } from 'react';
import styles from './styles.module.css'
import MusicCardRectangle2 from '@/components/Card/MusicCardRectangle-2';
import Line from '@/components/Common/Line';

type Props = {
  //
};

const Playlist: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.list}`}>
        <p className='text-white text-sm font-bold mb-3'>Đang phát</p>
        <MusicCardRectangle2 />
      </div>
      <div className="py-5">
        <Line />
      </div>
      <div className={`${styles.list}`}>
        <p className='text-white text-sm font-bold mb-3'>Tiếp theo</p>
        <div className={`${styles.listContent} grid grid-cols-12 gap-y-3 overflow-auto no-sb`}>
          {
            new Array(20).fill(null)?.map((_, index) => (
              <div className="col-span-12" key={index}>
                <MusicCardRectangle2 key={index} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default memo(Playlist);

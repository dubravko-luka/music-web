import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';

type Props = {
  //
};

const MusicCardRectangle: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className="grid grid-cols-12 gap-2 p-2 items-center">
          <div className={`col-span-2`}>
            <div className={`${styles.figure} relative`}>
              <div className={styles.iconPlay}>
                <Svg name='play' path='icons' />
              </div>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/c/7/7/7c77b46af18b56509fd2bac0f081ad49.jpg" alt="" />
            </div>
          </div>
          <div className="col-span-9">
            <p className={`${styles.info} text-sm text-white font-bold`}>Đó Là Chuyện Của Anh</p>
            <p className={`${styles.info} text-gray-500 text-xs`}>Trịnh Đình Quang</p>
            <p className={`${styles.info} text-gray-500 text-xs`}>5 ngày trước</p>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <div className={`${styles.showOption} relative`}>
              <Svg name='dot-vertical' path='icons' />
              <div className={`${styles.options}`}>
                <div className={`${styles.optionItem} flex items-center gap-2`}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='add-playlist' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Thêm vào danh sách phát</p>
                </div>
                <div className={`${styles.optionItem} flex items-center gap-2`}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='download' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Tải xuống</p>
                </div>
                <div className={`${styles.optionItem} flex items-center gap-2`}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='share' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Chia sẻ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MusicCardRectangle);

import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';

type Props = {
  //
};

const ArtistSquare: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapImgSong}`}>
          <div className={styles.iconPlay}>
            <Svg name='play' path='icons' />
          </div>
          <img className={`${styles.imgSong}`} src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/4/d/5/f4d58e6307c6be993791754aa7d4d7eb.jpg" alt="" />
        </div>
        <div className={`p-2 pb-3 ${styles.info}`}>
          <div className="grid grid-cols-12">
            <div className="col-span-11">
              <p className='font-semibold text-sm text-white'>Ice Cream (with Selena Gomez)</p>
              <p className='font-semibold text-xs text-blue-link mt-1'>Shawn Mendes, Camila Cabello</p>
              <div className='flex items-center gap-1'>
                <div className={styles.iconFavourite}>
                  <Svg name='favourite' path='icons' />
                </div>
                <span className="font-normal text-xs text-white mt-1">20.3M favorite</span>
              </div>
            </div>
            <div className="col-span-1">
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
      </div>
    </>
  );
};

export default memo(ArtistSquare);

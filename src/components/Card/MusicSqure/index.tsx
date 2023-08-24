import React, { memo, useRef, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import moment from 'moment';
import { formatTimePlay } from '@/helpers/common';
import { useDispatch, useSelector } from 'react-redux';
import { setIdPlay } from '@/store/actions/mediaAction';
import { RootState } from '@/store/types';

type Props = {
  song: any
};

const MusicCard: React.FC<Props> = ({ song }) => {

  const dispatch = useDispatch()
  const idPlay = useSelector((state: RootState) => state?.media?.id);

  return (
    <>
      <div className={`${styles.wrapper} ${idPlay && idPlay?.encodeId === song.encodeId ? styles.playing : ''}`}>
        <div className={`${styles.wrapImgSong}`} onClick={() => dispatch(setIdPlay(song))}>
          {
            idPlay && idPlay?.encodeId === song.encodeId
              ? (
                <div className={styles.iconPlaying}>
                  <img src="/images/gif/icon-playing.gif" alt="" />
                </div>
              )
              : (
                <div className={styles.iconPlay}>
                  <Svg name='play' path='icons' />
                </div>
              )
          }
          <img className={`${styles.imgSong}`} src={song?.thumbnailM} alt="" />
        </div>
        <div className={`p-2 pb-3 ${styles.info}`}>
          <div className="grid grid-cols-12">
            <div className="col-span-11" onClick={() => dispatch(setIdPlay(song))}>
              <p className='font-semibold text-sm text-white'>{song?.title}</p>
              <p className='font-semibold text-xs text-blue-link mt-1'>{song?.artistsNames}</p>
              <div className='flex items-center justify-between w-full gap-1'>
                <span className="font-normal text-xs text-gray-500 mt-1">
                  {
                    moment.unix(song?.releaseDate).format('DD-MM-YYYY')
                  }
                </span>
                <span className="font-normal text-xs text-gray-500 mt-1">
                  {
                    formatTimePlay(song?.duration)
                  }
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className={`${styles.showOption} relative`}
              >
                <Svg name='dot-vertical' path='icons' />
                <div
                  className={`${styles.options}`}
                >
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

export default memo(MusicCard);

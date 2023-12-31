import React, { memo, useRef, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import moment from 'moment';
import { extractLinkImgZingMp3, formatTimePlay } from '@/helpers/common';
import { useDispatch, useSelector } from 'react-redux';
import { setIdPlay, setPlayList } from '@/store/actions/mediaAction';
import { RootState } from '@/store/types';
import Copy from '@/components/Common/Copy';
import { usePlayList } from '@/hooks/usePlayList';

type Props = {
  song: any
};

const MusicCard: React.FC<Props> = ({ song }) => {

  const dispatch = useDispatch()
  const { onAddPlayList } = usePlayList()

  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const playList = useSelector((state: RootState) => state?.media?.playList);

  const [contextMenuStyle, setContextMenuStyle] = useState({
    top: 'calc(100%)'
  });

  const handleContextMenu = (e: any) => {
    e.preventDefault();
    const y = e.clientY;
    const menuHeight = 124;
    const viewportHeight = window.innerHeight;

    setContextMenuStyle({
      top: y + menuHeight > viewportHeight - 124 ? '-86px' : 'calc(100%)'
    });
  };

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
          <img className={`${styles.imgSong}`} src={`/poster/${extractLinkImgZingMp3(song?.thumbnailM)}`} alt="" />
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
                onMouseEnter={handleContextMenu}
              >
                <div className="relative z-8">
                  <Svg name='dot-vertical' path='icons' />
                </div>
                <div
                  className={`${styles.options} z-9`}
                  style={{
                    ...contextMenuStyle,
                  }}
                >
                  <div className={`${styles.optionItem} flex items-center gap-2`} onClick={() => onAddPlayList(song)}>
                    <div className={`${styles.iconOption}`}>
                      {
                        playList?.findIndex((item) => item.encodeId === song?.encodeId) !== -1
                          ? <Svg name='remove-playlist' path='icons' />
                          : <Svg name='add-playlist' path='icons' />
                      }
                    </div>
                    {
                      playList?.findIndex((item) => item.encodeId === song?.encodeId) !== -1
                        ? <p className='whitespace-nowrap text-white text-xs py-2'>Xoá khỏi danh sách phát</p>
                        : <p className='whitespace-nowrap text-white text-xs py-2'>Thêm vào danh sách phát</p>
                    }
                  </div>
                  <Copy value={`https://tunescape.vercel.app/play/${song?.alias}`}>
                    <div className={`${styles.optionItem} flex items-center gap-2`}>
                      <div className={`${styles.iconOption}`}>
                        <Svg name='share' path='icons' />
                      </div>
                      <p className='whitespace-nowrap text-white text-xs py-2'>Chia sẻ</p>
                    </div>
                  </Copy>
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

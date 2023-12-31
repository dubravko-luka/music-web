import React, { memo, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import TimeAgo from '@/components/Common/TimeAgo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setIdPlay, setPlayList } from '@/store/actions/mediaAction';
// import { downloadSong } from '@/helpers/common';
import Copy from '@/components/Common/Copy';
import { mainSite } from '@/helpers/constants';
import { extractLinkImgZingMp3 } from '@/helpers/common';
import { usePlayList } from '@/hooks/usePlayList';

type Props = {
  song: any
};

const MusicCardRectangle: React.FC<Props> = ({ song }) => {

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
        <div className="grid grid-cols-12 gap-2 p-2 items-center">
          <div className={`col-span-11 flex items-center gap-2`} onClick={() => dispatch(setIdPlay(song))}>
            <div className={`${styles.figure} relative`}>
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
              <img className='w-full h-full object-cover' src={`/poster/${extractLinkImgZingMp3(song?.thumbnail)}`} alt="" />
            </div>
            <div>
              <p className={`${styles.info} text-sm text-white font-bold`}>{song?.title}</p>
              <p className={`${styles.info} text-gray-500 text-xs`}>{song?.artistsNames}</p>
              <p className={`${styles.info} text-gray-500 text-xs`}>
                <TimeAgo timestamp={song?.releaseDate} />
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <div className={`${styles.showOption} relative`} onMouseEnter={handleContextMenu}>
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
                <Copy value={`${mainSite}/play/${song?.alias}`}>
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
    </>
  );
};

export default memo(MusicCardRectangle);

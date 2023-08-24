import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Svg from '../Svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setIdPlay } from '@/store/actions/mediaAction';

type Props = {
  children: React.ReactNode;
};


const RightClick: React.FC<Props> = ({ children }) => {

  const playList = useSelector((state: RootState) => state?.media?.playList);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const dispatch = useDispatch()

  const [contextMenuStyle, setContextMenuStyle] = useState({
    display: 'none',
    top: '0px',
    left: '0px',
  });

  const handleContextMenu = (e: any) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const menuWidth = 200;
    const menuHeight = 38 * 3 + 10; // (heightPeritem * numberItem) + paddingWrapper
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the position of the menu display so that it does not overflow the page margin
    const adjustedX = x + menuWidth > viewportWidth ? x - menuWidth : x;
    const adjustedY = y + menuHeight > viewportHeight ? y - menuHeight : y;

    setContextMenuStyle({
      display: 'block',
      top: adjustedY + 'px',
      left: adjustedX + 'px',
    });
  };

  const hideContextMenu = () => {
    setContextMenuStyle({
      display: 'none',
      top: '0px',
      left: '0px',
    });
  };

  const handlePrev = () => {
    const songIndex = playList.findIndex(item => item.encodeId === idPlay.encodeId);
    if (playList[songIndex - 1]) {
      dispatch(setIdPlay(playList[songIndex - 1]))
    }
  }

  const handleNext = () => {
    const songIndex = playList.findIndex(item => item.encodeId === idPlay.encodeId);
    if (playList[songIndex + 1]) {
      dispatch(setIdPlay(playList[songIndex + 1]))
    }
  }

  const reloadPage = async () => {
    window.location.reload()
  }

  useEffect(() => {
    const handleScroll = () => {
      hideContextMenu();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.target.closest('#menuRightClick')) {
        hideContextMenu()
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <div
          onContextMenu={handleContextMenu}
        >
          {children}
        </div>

        <div
          id="menuRightClick"
          className={`${styles.menu}`}
          style={{
            ...contextMenuStyle,
          }}
        >
          {
            playList.findIndex(item => item.encodeId === idPlay.encodeId) - 1 < 0
              ? (
                <></>
              ) : (
                <div className={`${styles.optionItem} flex items-center gap-2`} onClick={handlePrev}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='arrow-left' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Quay lại</p>
                </div>
              )
          }
          {
            playList.findIndex(item => item.encodeId === idPlay.encodeId) + 1 >= playList.length
              ? (
                <></>
              ) : (
                <div className={`${styles.optionItem} flex items-center gap-2`} onClick={handleNext}>
                  <div className={`${styles.iconOption}`}>
                    <Svg name='arrow-right' path='icons' />
                  </div>
                  <p className='whitespace-nowrap text-white text-xs py-2'>Tiếp theo</p>
                </div>
              )
          }
          <div className={`${styles.optionItem} flex items-center gap-2`} onClick={reloadPage}>
            <div className={`${styles.iconOption}`}>
              <Svg name='reload' path='icons' />
            </div>
            <p className='whitespace-nowrap text-white text-xs py-2'>Tải lại trang</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(RightClick);

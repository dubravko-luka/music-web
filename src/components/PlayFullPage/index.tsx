import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Setting from '@/components/Layout/Navigation/components/setting';
import Svg from '@/components/Common/Svg';
import { setShowFullPage } from '@/store/actions/globalAction';
import { extractLinkImgZingMp3 } from '@/helpers/common';

type Props = {
  //
};

const PlayFullPage: React.FC<Props> = () => {

  const isPlaying = useSelector((state: RootState) => state?.media?.isPlaying);
  const [showSetting, setShowSetting] = useState(false)
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const imgMainFullPage = useSelector((state: RootState) => state?.global.imgMainFullPage);
  const showImgMain = useSelector((state: RootState) => state?.global.showImgMain);
  const width = useSelector((state: RootState) => state?.window.width);
  const refSetting: any = useRef(null);
  const dispatch = useDispatch()

  const handleClickOutside = (event: any, ref: any, action: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e, refSetting, setShowSetting));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e, refSetting, setShowSetting));
    };
    // eslint-disable-next-line
  }, [refSetting]);

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
        <div className={`${styles.action} flex items-center`}>
          <div ref={refSetting} className={`relative`}>
            <div className={`${styles.headerIconSetting}`} onClick={() => setShowSetting(!showSetting)}>
              <Svg name="setting" path="icons" />
            </div>
            {
              showSetting
                ? <Setting />
                : <></>
            }
          </div>

          <div
            className={`${styles.menuFullPage} px-5 flex justify-end items-center`}
            onClick={() => dispatch(setShowFullPage(false))}
          >
            <div className={`${styles.turnOffFullPage}`}>
              <Svg name='chevron-down' path='icons' />
            </div>
          </div>
        </div>
        {
          showImgMain
            ? (
              <div
                className={`${styles.playPoster}`}
                style={{
                  '--width': `${width > 700 ? 600 : width - 30}px`
                } as any}
              >
                <div className={`${styles.playPosterMain} ${isPlaying ? styles.play : ''}`}>
                  <img
                    className={styles.playPosterImg}
                    src={imgMainFullPage ? imgMainFullPage : `/poster/${extractLinkImgZingMp3(idPlay?.thumbnailM)}`}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <></>
            )
        }
      </div>
    </>
  );
};

export default memo(PlayFullPage);

import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import { RootState } from '@/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { extractLinkImgZingMp3 } from '@/helpers/common';
import Svg from '@/components/Common/Svg';
import InputRange from 'react-input-range';
import { setMuted, setVolume } from '@/store/actions/mediaAction';
import WaveBar from '@/components/Wave/Bar'
import Control from '@/components/Audio/control';
import { Helmet } from 'react-helmet';

type Props = {
  //
};

const ThemePlayFullPage2: React.FC<Props> = () => {

  const elementRef: any = useRef();
  const dispatch = useDispatch();
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const imgMainFullPage = useSelector((state: RootState) => state?.global.imgMainFullPage);
  const volume = useSelector((state: RootState) => state?.media?.volume);
  const muted = useSelector((state: RootState) => state?.media?.muted);

  const [widthName, setWidthName] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const width = element.offsetWidth;
      setWidthName(width);
    }
  }, [idPlay]);

  console.log('---------->', widthName);

  return (
    <>
      <Helmet>
        <style>{`
          .controlAudio {
            opacity: 0;
            transition: none;
            height: 20px;
          }

          .play-bottom {
            height: 60px;
          }

          .wrapper-play-full-page {
            height: calc(100vh - 60px)!important;
            bottom: 60px;
          }
        `}</style>
      </Helmet>
      <div className={`${styles.wrapperTheme}`}>
        <div className={`${styles.wrapper}`}>
          <div className="grid grid-cols-12 md:gap-x-4 gap-y-4 relative">
            <div className={`${styles.imgPoster} md:col-span-6 col-span-12`}>
              <img src={imgMainFullPage ? imgMainFullPage : `/poster/${extractLinkImgZingMp3(idPlay?.thumbnailM)}`} alt="" />
            </div>
            <div className={`${styles.info} md:col-span-6 col-span-12`}>
              <div>
                <div className="flex">
                  <p ref={elementRef} className={`${styles.name} ${widthName >= 300 ? styles.animation : ''}`}>{idPlay.title}</p>
                </div>
                <p className={`${styles.singer} mt-5`}>{idPlay.artistsNames}</p>
                <div className={`${styles.controlPlay} w-full relative mt-5`}>
                  <Control />
                </div>
                <div className={`${styles.volumnWrapper} mt-5`}>
                  <div className="flex items-center justify-between w-full gap-2 volumn">
                    <div onClick={() => dispatch(setMuted(!muted))}>
                      {
                        muted || volume / 100 <= 0
                          ? <Svg name='muted' path='icons' />
                          : <Svg name='speaker' path='icons' />
                      }
                    </div>
                    <InputRange
                      formatLabel={() => ""}
                      maxValue={100}
                      minValue={0}
                      step={1}
                      value={volume}
                      onChange={(e: any) => {
                        dispatch(setVolume(e));
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={`wave`}>
                <WaveBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ThemePlayFullPage2);

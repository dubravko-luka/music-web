import React, { memo, useEffect, useRef } from 'react';
import InputRange from 'react-input-range';
import styles from './styles.module.css'
import Svg from '../Common/Svg';
import 'react-input-range/lib/css/index.css'
import PlayFullPage from '@/components/PlayFullPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setShowControl, setShowFullPage, setShowPlaylist } from '@/store/actions/globalAction';
import { setMuted, setVolume } from '@/store/actions/mediaAction';
import { extractLinkImgZingMp3 } from '@/helpers/common';
import _ from 'lodash';
import Copy from '../Common/Copy';
import Audio from '@/components/Audio';
import Waves from './components/waves';

type Props = {
  //
};

const Play: React.FC<Props> = () => {
  const volume = useSelector((state: RootState) => state?.media?.volume);
  const muted = useSelector((state: RootState) => state?.media?.muted);
  const showFullPage = useSelector((state: RootState) => state?.global.fullPage);
  const showControl = useSelector((state: RootState) => state?.global.showControl);
  const showBackground = useSelector((state: RootState) => state?.global.showBackground);
  const bgFullPage = useSelector((state: RootState) => state?.global.bgFullPage);
  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const audioRef = useSelector((state: RootState) => state?.media?.audioRef)

  const dispatch = useDispatch();

  const handleMuted = () => {
    dispatch(setMuted(!muted));
  }

  const onChangeVolumn = (e: any) => {
    dispatch(setVolume(e));
  }

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume])

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted])

  return (
    <>
      {
        idPlay
          ? (
            <>
              {/* Waves show when hide control audio */}
              <div onClick={() => dispatch(setShowControl(true))}>
                <Waves />
              </div>
              <div className={`${styles.playBottom} play-bottom ${showControl ? styles.show : ''} ${showFullPage ? styles.fullPageControl : ''} px-5 py-2 flex items-center z-40`}>
                {/* Control show hide control audio */}
                {
                  showFullPage
                    ? <></>
                    : <div className={`${styles.hideControl} z-1`} onClick={() => dispatch(setShowControl(false))}>
                      <Svg name="chevron-down" path='icons' />
                    </div>
                }
                <div className="w-full h-full flex justify-between gap-x-3 items-center relative">
                  {/* Left control: share and another action */}
                  <div className={`${styles.infoSong} ${showFullPage ? 'hidden' : ''} h-full`}>
                    <div className="h-full flex items-center gap-x-4 p-2">
                      <div className={`h-full`}>
                        <div className={`${styles.figure} h-full relative`}>
                          <img className='h-full' src={`/poster/${extractLinkImgZingMp3(idPlay?.thumbnail)}`} alt="" />
                        </div>
                      </div>
                      <div>
                        <p className={`${styles.info} text-sm text-white font-bold`}>{idPlay?.title}</p>
                        <p className={`${styles.info} text-gray-500 text-xs`}>{idPlay?.artistsNames}</p>
                      </div>
                      <div className="col-span-1 flex items-center justify-end">
                        <div className={`${styles.showOption} relative`}>
                          <div className={`${styles.iconHoverOption}`}>
                            <Svg name='dot-vertical' path='icons' />
                          </div>
                          <div className={`${styles.options}`}>
                            <Copy value={`https://tunescape.vercel.app/play/${idPlay?.alias}`}>
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
                  {/* Audio */}
                  <Audio />
                  {/* Right control */}
                  <div className={`h-full flex items-center justify-end ${showFullPage ? 'hidden' : ''}`}>
                    <div className={`${styles.fullPage} mr-2`} onClick={() => dispatch(setShowFullPage(!showFullPage))}>
                      <Svg name='full' path='icons' />
                    </div>
                    <div className={`flex items-center justify-end ${styles.controlVolumn}`}>
                      <div className={`${styles.volumnWrapper} flex items-center gap-2 volumn pl-2 pr-4`}>
                        <div onClick={handleMuted}>
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
                          onChange={onChangeVolumn}
                        />
                      </div>
                      <div className={`${styles.lineHeight}`}></div>
                      <div className={`${styles.playList} pl-3`} onClick={() => dispatch(setShowPlaylist(!showPlayList))}>
                        <Svg name='play-list' path='icons' />
                      </div>
                    </div>
                  </div>
                </div>
              </div >

              {/* Full page view */}
              {
                <div className={`${styles.wrapperPlayFullPage} wrapper-play-full-page ${showFullPage ? styles.active : ''}`}>
                  {
                    showFullPage
                      ? (
                        <>
                          <PlayFullPage />
                        </>
                      )
                      : <></>
                  }
                </div >
              }

              {/* Background fullpage */}
              <div className={`${styles.wrapBgImageFullpage} ${showFullPage ? styles.active : ''} relative`}>
                {
                  showBackground
                    ? (
                      <img
                        className={styles.bgImageFullpage}
                        src={bgFullPage ? bgFullPage : `/poster/${extractLinkImgZingMp3(idPlay?.thumbnailM)}`}
                        alt=""
                      />
                    ) : (
                      <></>
                    )
                }
              </div>
            </>
          ) : (
            <></>
          )
      }
    </>
  );
};

export default memo(Play);

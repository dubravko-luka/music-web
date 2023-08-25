import React, { memo, useEffect, useRef, useState } from 'react';
import InputRange from 'react-input-range';
import styles from './styles.module.css'
import Svg from '../Common/Svg';
import 'react-input-range/lib/css/index.css'
import PlayFullPage from '@/components/PlayFullPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setShowFullPage, setShowPlaylist } from '@/store/actions/globalAction';
import { setIdPlay, setMuted, setRandom, setRecentPlay, setVolume } from '@/store/actions/mediaAction';
import { formatTimePlay, saveHeardRecently } from '@/helpers/common';
import koreanMusic from '@/data/mp3/korean-music/data.json'
import newRelease from '@/data/mp3/new-relase/data.json'
import trend from '@/data/mp3/trend/data.json'
import trendFavourite from '@/data/mp3/trend-favourite/data.json'
import _ from 'lodash';
import Copy from '../Common/Copy';
import HeadPlay from '../Common/HeadPlay';
import EventListener from 'react-event-listener';

type AudioProps = {
  volumn: number,
  audioRef: any
}

const Audio: React.FC<AudioProps> = ({ volumn, audioRef }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const playList = useSelector((state: RootState) => state?.media?.playList);
  const randomSong = useSelector((state: RootState) => state?.media?.random);
  const idPlay = useSelector((state: RootState) => state?.media?.id);
  const dispatch = useDispatch()

  const recentPlay = async () => {
    const storedArray: any = await saveHeardRecently(idPlay?.encodeId);
    const recent = await [...koreanMusic, ...newRelease, ...trend, ...trendFavourite].filter((item) => storedArray.includes(item.encodeId));

    const seenIds = new Set();
    const array_eraser: any[] = []

    await recent.forEach(item => {
      if (!seenIds.has(item.encodeId)) {
        array_eraser.push(item);
        seenIds.add(item.encodeId);
      }
    })
    await dispatch(setRecentPlay([...array_eraser]))
  }

  const onPlay = async () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = volumn / 100;
      recentPlay()
    }
    setIsPlaying(!isPlaying);
  };

  const handleLoop = () => {
    audioRef.current.loop = !audioRef.current.loop;
  };

  const handleTimeUpdate = () => {
    if (audioRef.ended) {
      setIsPlaying(false)
    }
    setCurrentTime(Math.floor(audioRef.current.currentTime));
  };

  const onChangeTime = (e: any) => {
    audioRef.current.currentTime = e;
    setCurrentTime(e);
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      recentPlay()
    }
  }, [idPlay])

  const randomAllSong = () => {
    const randomMusic = _.sampleSize([...koreanMusic, ...newRelease, ...trend, ...trendFavourite], 1);
    dispatch(setIdPlay(randomMusic[0]))
  }

  const handleEnd = () => {
    if (randomSong) {
      if (playList.length <= 1) {
        randomAllSong()
      } else {
        const filteredArray = playList.filter(item => item.encodeId !== idPlay?.encodeId);
        const randomIndex = Math.floor(Math.random() * filteredArray.length);
        const newRand = filteredArray[randomIndex];
        dispatch(setIdPlay(newRand))
      }
    } else if (!audioRef?.current?.loop && playList?.length > 0) {
      const songIndex = playList.findIndex(item => item.encodeId === idPlay.encodeId);
      if (playList[songIndex + 1]) {
        dispatch(setIdPlay(playList[songIndex + 1]))
      } else {
        randomAllSong()
      }
    } else {
      randomAllSong()
    }
  }

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
    } else {
      randomAllSong()
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 32) {
      onPlay()
    }
  };

  return (
    <>
      <EventListener target="window" onKeyDown={handleKeyPress} />
      <HeadPlay />
      <div className={`${styles.controlPlay} h-full flex items-center`}>
        <div className='w-full timeSong'>
          <div className="flex justify-center items-center gap-x-10 mb-2">
            <div
              className={`${styles.action} ${randomSong ? styles.strokeActive : ''}`}
              onClick={() => dispatch(setRandom(!randomSong))}
            >
              <Svg name='mix' path='icons' />
            </div>
            <div className={`${styles.action} ${playList.findIndex(item => item.encodeId === idPlay.encodeId) - 1 < 0 ? styles.disabled : ''}`} onClick={handlePrev}>
              <Svg name='prev' path='icons' />
            </div>
            <div className={`${styles.actionPlay}`} onClick={onPlay} style={{ display: isPlaying ? 'block' : 'none' }}>
              <Svg name='pause' path='icons' />
            </div>
            <div className={`${styles.actionPlay}`} onClick={onPlay} style={{ display: isPlaying ? 'none' : 'block' }}>
              <Svg name='play' path='icons' />
            </div>
            <div className={`${styles.action}`} onClick={handleNext}>
              <Svg name='next' path='icons' />
            </div>
            <div
              className={`${styles.action} ${audioRef?.current?.loop ? styles.active : ''}`}
              onClick={handleLoop}
            >
              <Svg name='loop' path='icons' />
            </div>
          </div>
          <div className="flex gap-2">
            <span className='text-xs text-gray-500'>{formatTimePlay(Number(currentTime))}</span>
            <InputRange
              formatLabel={() => ""}
              maxValue={idPlay.duration as number ?? 0}
              minValue={0}
              step={1}
              value={currentTime}
              onChange={onChangeTime}
            />
            <span className='text-xs text-gray-500'>{formatTimePlay(idPlay.duration as number ?? 0)}</span>
          </div>
        </div>
      </div>
      <audio
        id="audio"
        className={`${styles.audio}`}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnded={handleEnd}
      >
        <source
          src={`/audio/${idPlay?.encodeId}/128`}
          type="audio/mp3"
        />
      </audio>
    </>
  )
}

type Props = {
  //
};

const Play: React.FC<Props> = () => {
  const audioRef: any = useRef(null);
  const [showControl, setShowControl] = useState(true);
  const volume = useSelector((state: RootState) => state?.media?.volume);
  const muted = useSelector((state: RootState) => state?.media?.muted);
  const showFullPage = useSelector((state: RootState) => state?.global.fullPage);
  const showBackground = useSelector((state: RootState) => state?.global.showBackground);
  const bgFullPage = useSelector((state: RootState) => state?.global.bgFullPage);
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

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList);
  const idPlay = useSelector((state: RootState) => state?.media?.id);

  return (
    <>
      <div className={`${styles.audioBlur} ${!showControl ? styles.show : ''} z-9`} onClick={() => setShowControl(true)}>
        <div className={`${styles.wavesBlock} relative`}>
          <div className={`${styles.iconPlay}`}>
            <Svg name='play-1' path='icons' />
          </div>
          <div className={`${styles.wave_0} ${styles.waves}`}></div>
          <div className={`${styles.wave_1} ${styles.waves}`}></div>
          <div className={`${styles.wave_2} ${styles.waves}`}></div>
        </div>
      </div>
      <div
        className={`${styles.playBottom} ${showControl ? styles.show : ''} ${showFullPage ? styles.fullPageControl : ''} px-5 py-2 flex items-center z-40`}
      >
        {
          showFullPage
            ? <></>
            : <div className={`${styles.hideControl} z-1`} onClick={() => setShowControl(false)}>
              <Svg name="chevron-down" path='icons' />
            </div>
        }
        <div className="w-full h-full flex justify-between gap-x-3 items-center relative">
          {/*  */}
          <div className={`${styles.infoSong} ${showFullPage ? 'hidden' : ''} h-full`}>
            <div className="h-full flex items-center gap-x-4 p-2">
              <div className={`h-full`}>
                <div className={`${styles.figure} h-full relative`}>
                  <img className='h-full' src={idPlay?.thumbnail} alt="" />
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
                    <div className={`${styles.optionItem} flex items-center gap-2`}>
                      <div className={`${styles.iconOption}`}>
                        <Svg name='download' path='icons' />
                      </div>
                      <p className='whitespace-nowrap text-white text-xs py-2'>Tải xuống</p>
                    </div>
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
          {/*  */}
          <Audio
            volumn={volume}
            audioRef={audioRef}
          />
          {/*  */}
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
      {
        <div className={`${styles.wrapperPlayFullPage} ${showFullPage ? styles.active : ''}`}>
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
      <div className={`${styles.wrapBgImageFullpage} ${showFullPage ? styles.active : ''} relative`}>
        {
          showBackground
            ? (
              <img
                className={styles.bgImageFullpage}
                src={bgFullPage ? bgFullPage : idPlay?.thumbnailM}
                alt=""
              />
            ) : (
              <></>
            )
        }
      </div>
    </>
  );
};

export default memo(Play);

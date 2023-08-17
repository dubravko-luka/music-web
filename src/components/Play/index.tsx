import React, { memo, useEffect, useRef, useState } from 'react';
import InputRange from 'react-input-range';
import styles from './styles.module.css'
import Svg from '../Common/Svg';
import 'react-input-range/lib/css/index.css'

type AudioProps = {
  volumn: number,
  audioRef: any
}

const Audio: React.FC<AudioProps> = ({ volumn, audioRef }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const onPlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = volumn / 100;
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

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleLoadedMetadata = () => {
    const duration = Math.floor(audioRef.current.duration);
    setTotalDuration(duration);
  };

  const onChangeTime = (e: any) => {
    audioRef.current.currentTime = e;
    setCurrentTime(e);
  }

  useEffect(() => {
    if (audioRef) {
      handleLoadedMetadata()
    }
  }, [audioRef])

  return (
    <>
      <div className={`${styles.controlPlay} h-full flex items-center`}>
        <div className='w-full timeSong'>
          <div className="flex justify-center items-center gap-x-10 mb-2">
            <div className={`${styles.action}`}>
              <Svg name='mix' path='icons' />
            </div>
            <div className={`${styles.action}`}>
              <Svg name='prev' path='icons' />
            </div>
            <div className={`${styles.actionPlay}`} onClick={onPlay}>
              {
                isPlaying
                  ? <Svg name='pause' path='icons' />
                  : <Svg name='play' path='icons' />
              }
            </div>
            <div className={`${styles.action}`}>
              <Svg name='next' path='icons' />
            </div>
            <div className={`${styles.action} ${audioRef?.current?.loop ? styles.active : ''}`} onClick={handleLoop}>
              <Svg name='loop' path='icons' />
            </div>
          </div>
          <div className="flex gap-2">
            <span className='text-xs text-gray-500'>{formatTime(Number(currentTime))}</span>
            <InputRange
              formatLabel={() => ""}
              maxValue={totalDuration}
              minValue={0}
              step={1}
              value={currentTime}
              onChange={onChangeTime}
            />
            <span className='text-xs text-gray-500'>{formatTime(totalDuration)}</span>
          </div>
        </div>
      </div>
      <audio
        id="audio"
        className={`${styles.audio}`}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source
          src="https://res.cloudinary.com/phuockaito/video/upload/v1657263555/audio/mu1fmqp9dmf61qj5megp.mp3"
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

  const [volumn, setVolumn] = useState(100)
  const [muted, setMuted] = useState(false);
  const audioRef: any = useRef(null);

  const handleMuted = () => {
    audioRef.current.muted = !muted;
    setMuted(!muted)
  }

  const onChangeVolumn = (e: any) => {
    setVolumn(e)
    audioRef.current.volume = e / 100;
  }

  return (
    <>
      <div className={`${styles.playBottom} px-5 py-2 flex items-center`}>
        <div className="w-full h-full flex justify-between gap-x-3 items-center">
          {/*  */}
          <div className={`${styles.infoSong} h-full`}>
            <div className="h-full flex items-center gap-x-4 p-2">
              <div className={`h-full`}>
                <div className={`${styles.figure} h-full relative`}>
                  <img className='h-full' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/c/7/7/7c77b46af18b56509fd2bac0f081ad49.jpg" alt="" />
                </div>
              </div>
              <div className="">
                <p className={`${styles.info} text-sm text-white font-bold`}>Đó Là Chuyện Của Anh</p>
                <p className={`${styles.info} text-gray-500 text-xs`}>Trịnh Đình Quang</p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <div className={`${styles.showOption} relative`}>
                  <div className={`${styles.iconHoverOption}`}>
                    <Svg name='dot-vertical' path='icons' />
                  </div>
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
          {/*  */}
          <Audio
            volumn={volumn}
            audioRef={audioRef}
          />
          {/*  */}
          <div className="h-full flex items-center justify-end">
            <div className={`${styles.volumnWrapper} flex items-center gap-2 volumn pl-2 pr-4`}>
              <div onClick={handleMuted}>
                {
                  muted || volumn / 100 <= 0
                    ? <Svg name='muted' path='icons' />
                    : <Svg name='speaker' path='icons' />
                }
              </div>
              <InputRange
                formatLabel={() => ""}
                maxValue={100}
                minValue={0}
                step={1}
                value={volumn}
                onChange={onChangeVolumn}
              />
            </div>
            <div className={`${styles.lineHeight}`}></div>
            <div className={`${styles.playList} pl-3`}>
              <Svg name='play-list' path='icons' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Play);

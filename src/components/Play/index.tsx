import React, { memo, useState } from 'react';
import InputRange from 'react-input-range';
import styles from './styles.module.css'
import Svg from '../Common/Svg';
import 'react-input-range/lib/css/index.css'

type Props = {
  //
};

const Play: React.FC<Props> = () => {

  const [volumn, setVolumn] = useState(100)

  const onChangeVolumn = (e: any) => {
    setVolumn(e)
  }

  const [time, setTime] = useState(70)

  const onChangeTime = (e: any) => {
    setTime(e)
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
          <div className={`${styles.controlPlay} h-full flex items-center`}>
            <div className='w-full timeSong'>
              <div className="flex justify-center items-center gap-x-10 mb-2">
                <div className={`${styles.action}`}>
                  <Svg name='mix' path='icons' />
                </div>
                <div className={`${styles.action}`}>
                  <Svg name='prev' path='icons' />
                </div>
                <div className={`${styles.actionPlay}`}>
                  <Svg name='play' path='icons' />
                </div>
                <div className={`${styles.action}`}>
                  <Svg name='next' path='icons' />
                </div>
                <div className={`${styles.action}`}>
                  <Svg name='loop' path='icons' />
                </div>
              </div>
              <div className="flex gap-2">
                <span className='text-xs text-gray-500'>00:00</span>
                <InputRange
                  formatLabel={() => ""}
                  maxValue={100}
                  minValue={0}
                  step={1}
                  value={time}
                  onChange={onChangeTime}
                />
                <span className='text-xs text-gray-500'>05:00</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="h-full flex items-center justify-end">
            <div className={`${styles.volumnWrapper} flex items-center gap-2 volumn pl-2 pr-4`}>
              <Svg name='speaker' path='icons' />
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

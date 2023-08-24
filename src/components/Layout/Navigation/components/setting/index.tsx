import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import InputRange from 'react-input-range';
import { setMuted, setVolume } from '@/store/actions/mediaAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setShowPlaylist } from '@/store/actions/globalAction';

type Props = {
  //
};

const Setting: React.FC<Props> = () => {
  const volume = useSelector((state: RootState) => state?.media?.volume);
  const muted = useSelector((state: RootState) => state?.media?.muted);

  const dispatch = useDispatch();

  const handleMuted = () => {
    dispatch(setMuted(!muted));
  }

  const onChangeVolumn = (e: any) => {
    dispatch(setVolume(e));
  }

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className="p-2">
          <div className={`${styles.volumnWrapper}`}>
            <p className='text-white my-3'>Âm lượng</p>
            <div className="flex items-center justify-between w-full gap-2 volumn">
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
          </div>
        </div>
        {/* <div className="flex justify-between items-center py-3">
          <p className='text-white text-sm'>Playlist</p>
          <div className='flex items-center'>
            <input
              onClick={() => dispatch(setShowPlaylist(!showPlayList))}
              checked={showPlayList}
              className={styles.playListActive}
              type="checkbox"
              id="playListActive"
            />
            <label className={styles.labelPlayListActive} htmlFor="playListActive">Toggle</label>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default memo(Setting);

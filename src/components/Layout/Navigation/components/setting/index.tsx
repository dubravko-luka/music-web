import React, { memo } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import InputRange from 'react-input-range';
import { setMuted, setVolume } from '@/store/actions/mediaAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setBackgroundFullPage, setImgMainFullPage, setShowMainImg } from '@/store/actions/globalAction';

type Props = {
  //
};

const Setting: React.FC<Props> = () => {
  const volume = useSelector((state: RootState) => state?.media?.volume);
  const muted = useSelector((state: RootState) => state?.media?.muted);
  const showFullPage = useSelector((state: RootState) => state?.global.fullPage);
  const showImgMain = useSelector((state: RootState) => state?.global.showImgMain);
  const imgMainFullPage = useSelector((state: RootState) => state?.global.imgMainFullPage);
  const bgFullPage = useSelector((state: RootState) => state?.global.bgFullPage);

  const dispatch = useDispatch();

  const handleMuted = () => {
    dispatch(setMuted(!muted));
  }

  const onChangeVolumn = (e: any) => {
    dispatch(setVolume(e));
  }

  const handleImageChangeBg = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      dispatch(setBackgroundFullPage(e.target.result));
    };

    reader.readAsDataURL(file);
  };

  const handleImageChangeMain = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      dispatch(setImgMainFullPage(e.target.result));
    };

    reader.readAsDataURL(file);
  };

  const resetImgBg = async () => {
    dispatch(setBackgroundFullPage(''));
  }

  const resetImgMain = async () => {
    dispatch(setImgMainFullPage(''));
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
        {
          showFullPage
            ? (
              <>
                <div className="flex items-center justify-between py-3">
                  <p className='text-white text-sm'>Thay đổi ảnh nền</p>
                  <div className='flex items-center gap-x-2'>
                    <label htmlFor='changeImageBg' className={styles.inputChangeImage}></label>
                    <input
                      className='w-0 h-0 opacity-0 fixed'
                      id='changeImageBg'
                      type="file"
                      accept="image/*"
                      onChange={handleImageChangeBg}
                    />
                    {
                      bgFullPage
                        ? <button onClick={resetImgBg} className={styles.buttonResetImg}>Xoá</button>
                        : <></>
                    }
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p className='text-white text-sm'>Thay đổi ảnh chính</p>
                  <div className='flex items-center gap-x-2'>
                    <label htmlFor='changeImageMain' className={styles.inputChangeImage}></label>
                    <input
                      className='w-0 h-0 opacity-0 fixed'
                      id='changeImageMain'
                      type="file"
                      accept="image/*"
                      onChange={handleImageChangeMain}
                    />
                    {
                      imgMainFullPage
                        ? <button onClick={resetImgMain} className={styles.buttonResetImg}>Xoá</button>
                        : <></>
                    }
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <p className='text-white text-sm'>Hiện ảnh chính</p>
                  <div className='flex items-center'>
                    <input
                      onClick={() => dispatch(setShowMainImg(!showImgMain))}
                      checked={showImgMain}
                      className={styles.playListActive}
                      type="checkbox"
                      id="showImgMain"
                    />
                    <label className={styles.labelPlayListActive} htmlFor="showImgMain">Toggle</label>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )
        }
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

import MusicCardRectangle from '@/components/Card/MusicCardRectangle';
import { RootState } from '@/store/types';
import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '@/data/mp3/chinese-music/data.json'
import _ from 'lodash';

type Props = {
  //
};

const classPlayList = 'xxl:col-span-4 lg:col-span-6 slg:col-span-12 sm:col-span-6 col-span-12'
const classNoPlayList = 'xxl:col-span-3 lg:col-span-4 slg:col-span-6 sm:col-span-6 col-span-12'

const ChineseMusic: React.FC<Props> = () => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList);

  const [dataSong, setDataSong] = useState<any[]>([])
  useEffect(() => {
    setDataSong(_.sampleSize(data, 18))
  }, [])

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {
          dataSong.map((item, index) => (
            <div className={showPlayList ? classPlayList : classNoPlayList} key={index}>
              <MusicCardRectangle song={item} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(ChineseMusic);

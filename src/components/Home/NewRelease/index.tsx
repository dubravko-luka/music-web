import MusicCardRectangle from '@/components/Card/MusicCardRectangle';
import { RootState } from '@/store/types';
import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '@/data/mp3/new-relase/data.json'
import _ from 'lodash';

type Props = {
  children: any,
};

const classPlayList = 'xxl:col-span-4 lg:col-span-6 slg:col-span-12 sm:col-span-6 col-span-12'
const classNoPlayList = 'xxl:col-span-3 lg:col-span-4 slg:col-span-6 sm:col-span-6 col-span-12'

const NewRelease: React.FC<Props> = ({ children }) => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList);

  const [dataSong, setDataSong] = useState<any[]>([])
  useEffect(() => {
    setDataSong(_.sampleSize(data, 18))
  }, [])

  return (
    <>
      {
        dataSong.length !== 0 && children
      }
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

export default memo(NewRelease);

import MusicCardRectangle from '@/components/Card/MusicCardRectangle';
import { RootState } from '@/store/types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  //
};

const classPlayList = 'xxl:col-span-4 lg:col-span-6 slg:col-span-12 sm:col-span-6 col-span-12'
const classNoPlayList = 'xxl:col-span-3 lg:col-span-4 slg:col-span-6 sm:col-span-6 col-span-12'

const NewRelease: React.FC<Props> = () => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList)

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {
          new Array(15).fill(null).map((_, item) => (
            <div className={showPlayList ? classPlayList : classNoPlayList} key={item}>
              <MusicCardRectangle />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(NewRelease);

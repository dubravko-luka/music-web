import React, { memo } from 'react';
import MusicCardSquare from '@/components/Card/MusicSqure'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
  //
};

const classPlayList = 'xxl:col-span-3 xl:col-span-4 lg:col-span-6 slg:col-span-6 md:col-span-4 ssm:col-span-6 col-span-12'
const classNoPlayList = 'xxl:col-span-2 lg:col-span-3 md:col-span-4 ssm:col-span-6 col-span-12'

const TrendTikTok: React.FC<Props> = () => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList)

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {
          new Array(12).fill(null).map((_, item) => (
            <div className={showPlayList ? classPlayList : classNoPlayList} key={item}>
              <MusicCardSquare />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(TrendTikTok);

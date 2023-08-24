import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import MusicCardRectangle from '@/components/Card/MusicCardRectangle';

type Props = {
  //
};

const classPlayList = 'xxl:col-span-3 xl:col-span-4 lg:col-span-6 slg:col-span-6 md:col-span-4 ssm:col-span-6 col-span-12'
const classNoPlayList = 'xxl:col-span-2 lg:col-span-3 md:col-span-4 ssm:col-span-6 col-span-12'

const Recently: React.FC<Props> = () => {

  const showPlayList = useSelector((state: RootState) => state?.global?.showPlayList);
  const playRecent = useSelector((state: RootState) => state?.media?.recentPlay);

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {
          playRecent?.map((item, index) => (
            <div className={showPlayList ? classPlayList : classNoPlayList} key={index}>
              <MusicCardRectangle song={item} />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(Recently);

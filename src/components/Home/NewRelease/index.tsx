import MusicCardRectangle from '@/components/Card/MusicCardRectangle';
import React, { memo } from 'react';

type Props = {
  //
};

const NewRelease: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {
          new Array(15).fill(null).map((_, item) => (
            <div className="col-span-4" key={item}>
              <MusicCardRectangle />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(NewRelease);

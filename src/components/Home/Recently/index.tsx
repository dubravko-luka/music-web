import React, { memo } from 'react';
import MusicCardSquare from '@/components/Card/MusicSqure'

type Props = {
  //
};

const Recently: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-10 gap-5">
        {
          new Array(2).fill(null).map((_, item) => (
            <div className="col-span-2" key={item}>
              <MusicCardSquare />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(Recently);

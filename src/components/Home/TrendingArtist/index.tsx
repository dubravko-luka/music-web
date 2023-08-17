import React, { memo } from 'react';
import ArtistSquare from '@/components/Card/ArtistSquare'

type Props = {
  //
};

const TrendingArtist: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-10 gap-5">
        {
          new Array(10).fill(null).map((_, item) => (
            <div className="col-span-2" key={item}>
              <ArtistSquare />
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(TrendingArtist);

import { mainSite } from '@/helpers/constants';
import { RootState } from '@/store/types';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

type Props = {
  //
};

const HeadPlay: React.FC<Props> = () => {
  const playId = useSelector((state: RootState) => state?.media?.id);
  return (
    <>
      <Helmet>
        <title>{playId.title} - TuneScape</title>

        {/* Z */}
        <meta name="og:image" content={`${playId.thumbnailM}`} />
        <meta name="og:title" content={playId.title} />
        <meta name="og:description" content={`${playId.title} - ${playId.artistsNames}`} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={mainSite} />

        {/* F */}
        <meta property="og:image" content={`${playId.thumbnailM}`} />
        <meta property="og:title" content={playId.title} />
        <meta property="og:description" content={`${playId.title} - ${playId.artistsNames}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={mainSite} />

        {/* T */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${playId.thumbnailM}`} />
        <meta name="twitter:title" content={`${playId.title}`} />
        <meta name="twitter:description" content={`${playId.title} - ${playId.artistsNames}`} />
        <meta name="twitter:site" content={mainSite} />
      </Helmet>
    </>
  );
};

export default memo(HeadPlay);

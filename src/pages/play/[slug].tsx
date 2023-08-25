
import { AppRoutes } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';
import koreanMusic from '@/data/mp3/korean-music/data.json'
import newRelease from '@/data/mp3/new-relase/data.json'
import trend from '@/data/mp3/trend/data.json'
import trendFavourite from '@/data/mp3/trend-favourite/data.json'
import { setIdPlay } from '@/store/actions/mediaAction';
import { useDispatch } from 'react-redux';
import HeadPlay from '@/components/Common/HeadPlay';

type Props = {
  //
};

const Play: React.FC<Props> = () => {

  const router = useRouter();
  const dispatch = useDispatch()

  const handlePlaySong = () => {
    const song = [...koreanMusic, ...newRelease, ...trend, ...trendFavourite].find((item) => item?.alias === router?.query.slug);
    if (song) {
      dispatch(setIdPlay(song))
    }
    router.push(AppRoutes?.home)
  }

  useEffect(() => {
    if (router && router.query && router.query.slug) {
      handlePlaySong()
    }
  }, [router])

  return (
    <>
      <HeadPlay />
    </>
  );
};

export default memo(Play);

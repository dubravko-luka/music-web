
import { AppRoutes } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';
import { setIdPlay } from '@/store/actions/mediaAction';
import { useDispatch } from 'react-redux';
import { ALL_LIST_MUSIC } from '@/helpers/constants';

type Props = {
  //
};

const Play: React.FC<Props> = () => {

  const router = useRouter();
  const dispatch = useDispatch()

  const handlePlaySong = () => {
    const song = ALL_LIST_MUSIC.find((item) => item?.alias === router?.query.slug);
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
    </>
  );
};

export default memo(Play);

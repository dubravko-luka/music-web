import { AppRoutes } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';

type Props = {
  //
};

const Play: React.FC<Props> = () => {

  const router = useRouter()

  useEffect(() => {
    router.push(AppRoutes?.home)
  }, [])

  return (
    <>
      {/*  */}
    </>
  );
};

export default memo(Play);

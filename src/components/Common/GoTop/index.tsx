import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Common/Svg';
import { scroller } from 'react-scroll';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

const GoTop: React.FC = () => {

  const [show, setShow] = useState(false)
  const showControl = useSelector((state: RootState) => state?.global.showControl);

  const handleScrollToBuyCar = () => {
    scroller.scrollTo('__next', {
      duration: 800,
      offset: -184,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShow(currentScrollPos >= 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.wrapper} ${show ? 'right-4' : "-right-32"} flex items-center justify-center go-top`}
        onClick={handleScrollToBuyCar}
        style={{
          bottom: showControl ? `106px` : '20px'
        }}
      >
        <Svg name='chevron-up' path='icons' />
      </div>
    </>
  )
}

export default memo(GoTop)
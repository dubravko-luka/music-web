import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Svg';
import { scroller } from 'react-scroll';

const GoTop: React.FC = () => {

  const [show, setShow] = useState(false)

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
      <div className={`${styles.wrapper} ${show ? 'right-4' : "-right-32"} flex items-center justify-center`} onClick={handleScrollToBuyCar}>
        <Svg name='chevron-up' path='icons' />
      </div>
    </>
  )
}

export default memo(GoTop)
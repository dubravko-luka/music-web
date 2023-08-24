import React, { memo, useState } from 'react';
import { copyClipboard } from '@/utils'
import Svg from '../Svg';
import styles from './styles.module.css'

type Props = {
  value?: string,
  children: any
};

const Copy: React.FC<Props> = ({ value, children }) => {

  const [show, setShow] = useState(false)

  const onShow = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1000);
  }

  return (
    <>
      <div className="relative">
        <div className={`${styles.copied} ${show ? styles.active : ''}`}>
          Copied
        </div>
        <div
          onClick={() => {
            copyClipboard(value)
            onShow()
          }}
        >
          {
            children
          }
        </div>
      </div>
    </>
  );
};

export default memo(Copy);

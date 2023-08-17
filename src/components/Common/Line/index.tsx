import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const Line: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.line}`}></div>
    </>
  );
};

export default memo(Line);

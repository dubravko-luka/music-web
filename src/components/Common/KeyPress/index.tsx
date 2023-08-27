import { RootState } from '@/store/types';
import React, { memo } from 'react';
import EventListener from 'react-event-listener';
import { useSelector } from 'react-redux';

type Props = {
  //
};

const KeyPress: React.FC<Props> = () => {

  const enabledInput = useSelector((state: RootState) => state?.global?.enabledInput);

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 32 && !enabledInput) {
      event.preventDefault();
    }
  };

  return (
    <>
      <EventListener target="window" onKeyDown={handleKeyPress} />
    </>
  );
};

export default memo(KeyPress);

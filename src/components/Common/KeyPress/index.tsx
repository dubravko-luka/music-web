import { useKeyPress } from '@/hooks/useKeyPress';
import React, { memo } from 'react';
import EventListener from 'react-event-listener';

type Props = {
  //
};

const KeyPress: React.FC<Props> = () => {

  const { pauseKeyPress } = useKeyPress()

  return (
    <>
      <EventListener target="window" onKeyDown={(e: any) => pauseKeyPress(e)} />
    </>
  );
};

export default memo(KeyPress);

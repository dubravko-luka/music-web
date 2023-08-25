import React, { memo } from 'react';
import EventListener from 'react-event-listener';

type Props = {
  //
};

const KeyPress: React.FC<Props> = () => {

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 32) {
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

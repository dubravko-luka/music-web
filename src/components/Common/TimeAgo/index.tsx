import React, { memo } from 'react';
import moment from 'moment';

interface TimeAgoProps {
  timestamp: number;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const formattedTime = moment.unix(timestamp).fromNow();

  return (
    <>
      {formattedTime}
    </>
  );
}

export default memo(TimeAgo);

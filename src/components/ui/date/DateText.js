import React from 'react';
import Text from '../text';
import {resolveTimeText} from '../../../utils/dateHandler';

const DateText = ({date}) => {
  const classes = {
    font: {
      fontSize: 14,
      color: '#999999',
    },
  };
  console.log('DATE', date);
  return (
    <Text size={classes.font.fontSize} color={classes.font.color}>
      {resolveTimeText(date)}
    </Text>
  );
};

export default DateText;

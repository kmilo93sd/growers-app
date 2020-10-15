import React from 'react';
import {Text as NativeText} from 'react-native';

const Text = ({...props}) => {
  return (
    <NativeText style={{color: props.color, fontSize: props.size}}>
      {props.children}
    </NativeText>
  );
};

export default Text;

import React from 'react';
import {Text as NativeText} from 'react-native';

const Text = ({...props}) => {
  return (
    <NativeText style={{color: props.color}} size={{fontSize: props.fontSize}}>
      {props.children}
    </NativeText>
  );
};

export default Text;

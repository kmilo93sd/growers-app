import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({children}) => {
  return <Text style={stlyes.title}>{children}</Text>;
};

const stlyes = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Title;

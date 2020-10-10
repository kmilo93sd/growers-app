import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import useTheme from '../../../../providers/theme';

const Screen = ({children, ...props}) => {
  const {theme} = useTheme();
  return props.scroll ? (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
        flex: undefined,
      }}>
      {children}
    </ScrollView>
  ) : (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default Screen;

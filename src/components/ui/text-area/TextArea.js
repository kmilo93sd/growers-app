import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const TextArea = ({value, onChange}) => {
  return (
    <View style={styles.textAreaContainer}>
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: '#d7d7d7',
    borderWidth: 1,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 10,
    width: '100%',
  },
});

export default TextArea;

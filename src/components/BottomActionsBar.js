import React, {useContext} from 'react';
import {GrowContext} from '../providers/grow';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomActionsBar = () => {
  const navigation = useNavigation();
  const options = {
    title: 'Seleccionar foto',
    takePhotoButtonTitle: 'Tomar foto',
    chooseFromLibraryButtonTitle: 'Seleccionar desde mi dispositivo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const {createGrow} = useContext(GrowContext);

  const handleSelection = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
      return;
    }
    if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      alert('Ha ocurrido un problema');
    }
    console.log('SOURCE', Object.keys(response));
    const source = {
      uri: 'data:image/jpeg;base64,' + response.data,
      path: response.path,
    };
    createGrow(source);
    navigation.navigate('Añadir');
  };

  const onAddPhoto = () => {
    ImagePicker.showImagePicker(options, handleSelection);
  };

  return (
    <View style={styles.fixedBar}>
      <TouchableOpacity style={styles.button} onPress={onAddPhoto}>
        <Icon name={'camera'} size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(212, 212, 212, 0.5)',
    width: '100%',
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default BottomActionsBar;

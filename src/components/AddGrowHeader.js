import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GrowsContext} from '../providers/grows';

const AddGrowHeader = ({...props}) => {
  const {saveGrow} = useContext(GrowsContext);
  const navigation = useNavigation();

  const onSave = async () => {
    try {
      await saveGrow();
      navigation.navigate('Inicio');
    } catch (error) {
      alert('Error al crear');
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 3}} />
      <View
        style={{
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Button onPress={() => onSave()} title="Guardar" color="#32a852" />
      </View>
    </View>
  );
};

export default AddGrowHeader;

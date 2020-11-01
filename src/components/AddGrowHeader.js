import React, {useContext} from 'react';
import {Button, View, TextInput} from 'react-native';
import {GrowContext} from '../providers/grow';
import {useNavigation} from '@react-navigation/native';

const AddGrowHeader = ({...props}) => {
  const {grow, updateTitle, saveGrow} = useContext(GrowContext);
  const navigation = useNavigation();
  const onChange = (event) => updateTitle(event.nativeEvent.text);

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
      <View style={{flex: 3}}>
        <TextInput value={grow.title} onChange={onChange} />
      </View>
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

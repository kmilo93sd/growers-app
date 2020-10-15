import React, {useContext} from 'react';
import {Button, View, TextInput} from 'react-native';
import {GrowContext} from '../providers/grow/GrowContext';

const AddGrowHeader = ({...props}) => {
  const {newGrow, setNewGrow} = useContext(GrowContext);
  const onTitleUpdate = (newTitle) => setNewGrow({...newGrow, title: newTitle});
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 3}}>
        <TextInput value={newGrow.title} onChange={onTitleUpdate} />
      </View>
      <View style={{flex: 1}}>
        <Button
          onPress={() => {
            const date = new Date();
            const timestamp = date.toString();
            setNewGrow({
              ...newGrow,
              id: '',
              createdAt: timestamp,
              updatedAt: timestamp,
            });
            console.log('crear', newGrow);
            alert('creado');
          }}
          title="Guardar"
          color="#32a852"
        />
      </View>
    </View>
  );
};

export default AddGrowHeader;

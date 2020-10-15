import React, {useContext, useEffect} from 'react';
import Screen from '../../components/ui/screens/screen';
import {useRoute} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/ui/text';
import TextArea from '../../components/ui/text-area/TextArea';
import {GrowContext} from '../../providers/grow/GrowContext';

const NewGrow = () => {
  const route = useRoute();
  const image = route.params.image;
  const {newGrow, setNewGrow} = useContext(GrowContext);

  
  const updateImage = (aImage) => {
    setNewGrow({...newGrow, image: aImage});
  };

  const updateDescription = (aDescription) => {
    setNewGrow({...newGrow, description: aDescription});
  };

  useEffect(() => {
    updateImage(image);
  });

  return (
    <Screen scroll>
      <View style={styles.container}>
        <Image style={styles.image} source={newGrow.image} />
        <View>
          <Text size={24}>Añadir notas:</Text>
          <TextArea value={newGrow.description} onChange={updateDescription} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%'},
  image: {height: 300, width: '100%'},
});

export default NewGrow;

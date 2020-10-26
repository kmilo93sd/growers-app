import React, {useContext} from 'react';
import Screen from '../../components/ui/screens/screen';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/ui/text';
import TextArea from '../../components/ui/text-area/TextArea';
import {GrowContext} from '../../providers/grow';

const NewGrow = () => {
  const {grow, updateDescription} = useContext(GrowContext);
  const onChange = (text) => updateDescription(text);

  return (
    <Screen scroll>
      <View style={styles.container}>
        <Image style={styles.image} source={grow.image} />
        <View>
          <Text size={24}>Añadir notas:</Text>
          <TextArea value={grow.description} onChange={onChange} />
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

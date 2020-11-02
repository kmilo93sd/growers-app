import React, {useContext} from 'react';
import Screen from '../../components/ui/screens/screen';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import TextArea from '../../components/ui/text-area/TextArea';
import {GrowsContext} from '../../providers/grows';

const NewGrow = () => {
  const {grow, updateTitle, updateDescription} = useContext(GrowsContext);
  const onDescriptionChange = (text) => updateDescription(text);
  const onTitleChange = (event) => updateTitle(event.nativeEvent.text);

  return (
    <Screen scroll>
      <View style={styles.container}>
        <Image style={styles.image} source={grow.image} />
        <View>
          <TextInput
            placeholder={'Titulo...'}
            value={grow.title}
            onChange={onTitleChange}
          />
          <TextArea
            value={grow.description}
            placeholder={'Añade algunas notas ...'}
            onChange={onDescriptionChange}
          />
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

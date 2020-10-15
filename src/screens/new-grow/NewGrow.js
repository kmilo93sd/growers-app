import React, {useState} from 'react';
import Screen from '../../components/ui/screens/screen';
import {useRoute} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/ui/text';
import TextArea from '../../components/ui/text-area/TextArea';

const NewGrow = () => {
  const route = useRoute();
  const [image] = useState(route.params.image || null);
  const [notes, setNotes] = useState('');
  return (
    <Screen scroll>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <Text size={24}>Añadir notas:</Text>
          <TextArea value={notes} onChange={(value) => setNotes(value)} />
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

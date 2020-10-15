import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Image, View} from 'react-native';

import Text from '../../components/ui/text';
import Title from '../../components/ui/title';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../../components/ui/screens/screen';
import useTheme from '../../providers/theme';
import BottomActionsBar from '../../components/BottomActionsBar';

const GrowDetails = () => {
  const route = useRoute();
  const growId = route.params.growId || '';

  const [grow, setGrow] = useState({
    id: '1',
    title: `Planta 1`,
    cover:
      'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo ex, scelerisque nec auctor a, venenatis et turpis. Aenean facilisis mauris felis, bibendum euismod velit eleifend ut. Morbi at sagittis mi. Praesent et ligula eget enim finibus posuere. ',
    strain: 'White widow',
    ownerId: '1',
    images: [
      'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
      'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
      'https://files.nccih.nih.gov/marijuana-gettyimages-116036237-square.jpg',
    ],
  });
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    setIsLoading(false);
  }, [growId]);

  if (isLoading) {
    return (
      <Screen>
        <Text>Cargando...</Text>
      </Screen>
    );
  }

  return (
    <View>
      <Screen scroll={true}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 150,
            padding: 10,
            width: '100%',
          }}>
          <Title>{grow.title}</Title>
          <Text>{grow.strain}</Text>
          <Text>7 semanas</Text>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            backgroundColor: '#FBFBFB',
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={'chevron-back'} size={30} color={theme.white} />
          </View>
          <View
            style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Title>Hoy</Title>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={'chevron-forward'} size={30} color={theme.white} />
          </View>
        </View>
        <View style={{width: '100%'}}>
          <Image
            style={{height: 300, width: '100%'}}
            source={{
              uri: grow.cover,
            }}
          />
          <View style={{padding: 20}}>
            <Text size={24}>{grow.description}</Text>
          </View>
        </View>
      </Screen>
      <BottomActionsBar />
    </View>
  );
};

export default GrowDetails;

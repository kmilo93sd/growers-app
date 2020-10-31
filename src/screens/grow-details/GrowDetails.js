import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Image, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Text from '../../components/ui/text';
import Title from '../../components/ui/title';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen from '../../components/ui/screens/screen';
import useTheme from '../../providers/theme';
import BottomActionsBar from '../../components/BottomActionsBar';
import {getGrowById} from '../../api/grows';

const GrowDetails = () => {
  const route = useRoute();
  const growId = route.params.growId || '';
  console.log('GROWID', growId);
  const [grow, setGrow] = useState({
    id: '',
    title: '',
    image: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const fetchGrow = async (id) => {
    try {
      const response = await getGrowById(id);
      setGrow(response);
    } catch (error) {
      console.log('ERROR', error);
      alert('error al cargar el cultivo');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGrow(growId);
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
          <Text>{grow.createdAt}</Text>
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
              uri: grow.image,
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

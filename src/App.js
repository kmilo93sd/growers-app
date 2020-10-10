import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getGrows} from './api/mocks/growsMock';
import Title from './components/ui/title';
import Text from './components/ui/text';
import Screen from './components/ui/screens/screen';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const [grows, setGrows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('Detalles');
  useEffect(() => {
    getGrows()
      .then((response) => {
        setGrows(response.data);
      })
      .catch((error) => {
        alert('Error al cargar los cultivos');
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) {
    return (
      <Screen>
        <Text>Cargando...</Text>
      </Screen>
    );
  }

  return (
    <Screen scroll={true}>
      {grows.map((grow) => (
        <TouchableOpacity key={grow.id} style={styles.item} onPress={onPress}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: grow.cover,
              }}
            />
          </View>
          <View style={styles.basicInfo}>
            <Title>{grow.title}</Title>
            <Text>{grow.strain}</Text>
            <Text>7 semanas</Text>
          </View>
        </TouchableOpacity>
      ))}
    </Screen>
  );
};

const GrowDetails = () => {
  return (
    <Screen scroll={true}>
      <Text>Hello</Text>
    </Screen>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalles" component={GrowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  item: {
    height: 350,
    width: '90%',
    margin: 10,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  basicInfo: {
    flex: 2,
    marginTop: -20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderLeftColor: '#CBCBCB',
    borderLeftWidth: 1,
    borderRightColor: '#CBCBCB',
    borderRightWidth: 1,
  },
});

export default App;

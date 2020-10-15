import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GrowDetails from './screens/grow-details/GrowDetails';
import Grows from './screens/grows/Grows';
import NewGrow from './screens/new-grow/NewGrow';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Grows} />
        <Stack.Screen name="Detalles" component={GrowDetails} />
        <Stack.Screen name="Añadir" component={NewGrow} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

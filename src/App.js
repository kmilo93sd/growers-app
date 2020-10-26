import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GrowDetails from './screens/grow-details/GrowDetails';
import Grows from './screens/grows/Grows';
import NewGrow from './screens/new-grow/NewGrow';
import AddGrowHeader from './components/AddGrowHeader';
import {GrowProvider} from './providers/grow';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    auth().signInAnonymously();
  });

  return (
    <GrowProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Grows} />
          <Stack.Screen name="Detalles" component={GrowDetails} />
          <Stack.Screen
            name="Añadir"
            component={NewGrow}
            options={{headerTitle: (props) => <AddGrowHeader {...props} />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GrowProvider>
  );
};

export default App;

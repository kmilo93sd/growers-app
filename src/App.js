import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GrowDetails from './screens/grow-details/GrowDetails';
import Grows from './screens/grows/Grows';
import NewGrow from './screens/new-grow/NewGrow';
import AddGrowHeader from './components/AddGrowHeader';
import Auth from './screens/auth/Auth';
import {GrowProvider} from './providers/grow';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '562154326656-bg1jlcjkuhb3vq9lon4m3fhqonajpifb.apps.googleusercontent.com',
});

const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  console.log('USER', user);
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, [user]);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={Auth}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

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

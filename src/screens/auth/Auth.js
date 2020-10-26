import React from 'react';
import {View} from 'react-native';
import Title from '../../components/ui/title';
import Screen from '../../components/ui/screens/screen';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const navigation = useNavigation();

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View>
      <Screen>
        <Title>Iniciar sesión</Title>
        <Button
          title="Google Sign-In"
          onPress={() =>
            onGoogleButtonPress().then(() => navigation.navigate('Inicio'))
          }
        />
      </Screen>
    </View>
  );
};

export default Auth;

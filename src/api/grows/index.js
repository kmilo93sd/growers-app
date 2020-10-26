import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {nanoid} from 'nanoid';

const uploadFile = async (image) => {
  const path = `grows/images/${nanoid()}`;
  const reference = storage().ref(path);
  await reference.putFile(image);
  return path;
};

export const addGrow = async ({id, image, ...grow}) => {
  const imagePath = await uploadFile(image.path);
  await firestore()
    .collection('Grows')
    .doc(id)
    .set({...grow, image: imagePath, accountId: 'BXR9kxOyextXH4dZwTJTG'});
};

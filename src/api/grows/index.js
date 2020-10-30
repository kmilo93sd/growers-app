import {nanoid} from 'nanoid';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const TABLE_NAME = 'Grows';

const uploadFile = async (image) => {
  const path = `grows/images/${nanoid()}`;
  const reference = storage().ref(path);
  await reference.putFile(image);
  return path;
};

export const addGrow = async ({id, image, ...grow}) => {
  const imagePath = await uploadFile(image.path);
  await firestore()
    .collection(TABLE_NAME)
    .doc(id)
    .set({...grow, image: imagePath});
};

export const getGrows = async () => {
  try {
    const response = await firestore().collection(TABLE_NAME).get();
    const grows = response.docs.map(({_data}) => _data);
    return await Promise.all(
      grows.map(async (grow) => {
        const imageUrl = await storage().ref(grow.image).getDownloadURL();
        return {
          ...grow,
          image: imageUrl,
        };
      }),
    );
  } catch (error) {
    throw new Error(`Error ${error.message}`);
  }
};

export const getGrowById = async (growId) => {
  return await firestore().collection(TABLE_NAME).doc(growId).get();
};

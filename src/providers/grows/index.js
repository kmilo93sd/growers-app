import React, {useEffect, useState} from 'react';
import {createContext} from 'react';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {now} from '../../utils/dateHandler';
import database from '../../utils/database';

const GrowsContext = createContext();

const GrowsProvider = ({...props}) => {
  const initialGrow = {
    id: '',
    title: '',
    image: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  };
  const [grow, setGrow] = useState(initialGrow);
  const [grows, setGrows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGrows = async () => {
    try {
      const response = await database.executeSql('SELECT * FROM "grows"');
      const data = response.rows.raw();

      setGrows(
        data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
          createdAt: item.created_at,
          updatedAt: item.updated_at,
        })),
      );
    } catch (error) {
      console.log('ERROR', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGrows();
  }, []);

  const getById = (id) => setGrow(grows.find((grow) => grow.id === id));

  const createGrow = (image) => {
    if (!image) {
      throw new Error('Image is required to create a grow.');
    }
    setGrow({
      id: nanoid(),
      title: 'Nueva nota',
      image: image,
      description: '',
      createdAt: now(),
      updatedAt: now(),
    });
  };

  const updateTitle = (newTitle) => setGrow({...grow, title: newTitle});

  const updateDescription = (description) => setGrow({...grow, description});

  const saveGrow = async () => {
    try {
      const data = await database.executeSql(
        'INSERT INTO grows (id, title, description, image, created_at, updated_at) VALUES (?,?,?,?,?,?)',
        [
          grow.id,
          grow.title,
          grow.description,
          grow.image.path,
          grow.createdAt,
          grow.updatedAt,
        ],
      );
      setGrows((prevState) => [
        ...prevState,
        {...grow, image: grow.image.path},
      ]);
    } catch (error) {
      console.log('Error on creation', error.message);
    }
  };

  return (
    <GrowsContext.Provider
      value={{
        grows: grows,
        isLoading: isLoading,
        createGrow: createGrow,
        updateTitle: updateTitle,
        updateDescription: updateDescription,
        saveGrow: saveGrow,
        grow: grow,
        getById: getById,
      }}
      {...props}>
      {props.children}
    </GrowsContext.Provider>
  );
};

export {GrowsContext, GrowsProvider};

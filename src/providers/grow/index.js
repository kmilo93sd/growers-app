import React, {useState} from 'react';
import {createContext} from 'react';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {now} from '../../utils/dateHandler';
import {addGrow} from '../../api/grows';

const GrowContext = createContext();

const GrowProvider = ({...props}) => {
  const initialGrow = {
    id: '',
    title: '',
    image: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  };

  const initialGrowsState = {
    grows: [],
  };

  const [grow, setGrow] = useState(initialGrow);
  const [grows, setGrows] = useState(initialGrowsState);
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
    const addedGrow = await addGrow(grow);
    setGrows((prevState) => [...prevState, addedGrow]);
  };

  return (
    <GrowContext.Provider
      value={{
        grow,
        createGrow,
        updateDescription,
        updateTitle,
        saveGrow,
        grows,
        setGrows,
      }}
      {...props}>
      {props.children}
    </GrowContext.Provider>
  );
};

export {GrowContext, GrowProvider};

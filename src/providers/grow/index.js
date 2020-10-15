import React, {useState} from 'react';
import {GrowContext} from './GrowContext';

const GrowProvider = ({...props}) => {
  const initialNewGrow = {
    id: '',
    title: '',
    image: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  };
  const [newGrow, setNewGrow] = useState(initialNewGrow);

  return (
    <GrowContext.Provider value={{newGrow, setNewGrow}} {...props}>
      {props.children}
    </GrowContext.Provider>
  );
};

export default GrowProvider;

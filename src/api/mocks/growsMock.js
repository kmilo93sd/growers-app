import {grows} from './data/grows';

const fakeCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: data,
      });
    }, 100);
  });
};

export const getGrows = async (query) => {
  return await fakeCall(grows());
};

export const getGrowById = async (id) => {
  const item = grows.find((grow) => grow.id === id);
  return await fakeCall(item);
};

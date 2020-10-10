import themes from './themes.json';

const useTheme = () => {

  const getTheme = () => {
    return themes.default;
  };

  const theme = getTheme();

  return {theme};
};

export default useTheme;

import { dark } from './dark';

const light = {
  colors: {
    primary: '#7863A5',
    primaryLight: '#a294c1',
    primaryDark: '#554577',
    background: '#f6f8fb',
    text: '#121212',
    white: '#fff',
    black: '#0d0d0d',
    grayLighter: '#ededed',
    grayLight: '#e0e0e0',
    gray: '#595959',
    grayDark: '#333',
    grayDarker: '#1a1a1a',
    gradient:
      'linear-gradient(90deg, rgba(170,151,210,1) 35%, rgba(120,99,165,1) 51%, rgba(102,87,139,1) 100%)',
  },
  ...dark,
};

export { light };

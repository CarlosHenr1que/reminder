import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  title: 'default',

  colors: {
    background: '#171717 ',
    primary: '#2F2F2F',
    secondary: '#FFFFFF',

    error: '#D30000',
  },

  textColors: {
    primary: '#FFFFFF',
    secondary: '#676767',
    placeHolder: '#8D8D8D',
    error: '#D30000',
  },

  metrics: {
    baseMargin: 10,
    basePadding: 8,
    baseRadius: 8,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
  },
};

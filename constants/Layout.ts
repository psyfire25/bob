import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const padding = (Dimensions.get('window').width)/1.62/33;

export default {
  window: {
    width,
    height,
    padding,
  },
  isSmallDevice: width < 375,
};

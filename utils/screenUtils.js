import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

// Standard dimensions
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

// Utility function to scale a value based on the screen width
const scale = size => (SCREEN_WIDTH / 375) * size;

// Font scaling function
const normalizeFont = size => {
  const ratio = size / 375;
  const newSize = Math.round(
    PixelRatio.roundToNearestPixel(SCREEN_WIDTH * ratio),
  );
  return Platform.OS === 'ios' ? newSize : newSize - 2;
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  //   scale,
  normalizeFont,
};

import { Dimensions, Platform } from 'react-native';

const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
};
const getSdkVersion = () => {
  if (Platform.OS === 'android') {
    return Platform.Version;
  }
  return null;
};

// eslint-disable-next-line
export { isIphoneX, getSdkVersion };

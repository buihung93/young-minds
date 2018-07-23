import { Dimensions, Platform } from 'react-native';
import { isIphoneX } from './Device';

const windowSize = Dimensions.get('window');
const ratioH = isIphoneX() === true ? windowSize.height / (667 + 145) : windowSize.height / 667; //  eslint-disable-line
const ratioW = isIphoneX() === true ? windowSize.width / 375 : windowSize.width / 375;
const iOSStatusBarHeight = isIphoneX() === true ? 44 * ratioH : 20 * ratioH;
const statusBarHeight = Platform.OS === 'ios' ? iOSStatusBarHeight : 22 * ratioH;
const navBarHeight =
  Platform.OS === 'ios' ? 44 * ratioH + statusBarHeight : 50 * ratioH + statusBarHeight; //  eslint-disable-line no-mixed-operators

export { statusBarHeight, navBarHeight, windowSize, ratioH, ratioW };

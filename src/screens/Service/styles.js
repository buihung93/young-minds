import { StyleSheet } from 'react-native';
import { iOSStatusBarHeight, navBarHeight, ratioW, windowSize, ratioH } from '../../Utilities/Transform';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    paddingTop: 16,
    flexShrink: 1
  },
  h1: {
    fontSize: 24,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  regular: {
    fontSize: 15,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  image: {
    width: 300 * ratioW, 
    height: 186*ratioH,
    alignSelf: 'center'
  }
});

export default styles;
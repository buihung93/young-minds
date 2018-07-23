import { StyleSheet } from 'react-native';
import { iOSStatusBarHeight, navBarHeight, ratioW } from '../../Utilities/Transform';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  }
});

export default styles;
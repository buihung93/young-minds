import { StyleSheet } from 'react-native';
import { iOSStatusBarHeight } from '../../Utilities/Transform';
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(17,28,41)',
    width: '100%',
  },
  image: {
    width: 120,
    height: 100
  },
  imageContainer: {
    width: '100%',
    backgroundColor: 'rgb(17,28,41)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainerStyle: {
    justifyContent: 'flex-start',
    width: '100%',
  }
});

export default styles;
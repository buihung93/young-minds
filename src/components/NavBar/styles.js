import { StyleSheet } from 'react-native';
import { iOSStatusBarHeight, navBarHeight } from '../../Utilities/Transform';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(17,28,41)',
    width: '100%',
    height: navBarHeight, 
    paddingTop: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    paddingTop: 15,
  }
});

export default styles;
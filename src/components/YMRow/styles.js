import { StyleSheet } from 'react-native';
import { iOSStatusBarHeight, navBarHeight, ratioW } from '../../Utilities/Transform';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d44900',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  imageContainer: {
    padding: 15,
  },
  image: {
    height: 65*ratioW,
    width: 65*ratioW,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    // alignSelf: 'center',
    fontWeight: 'bold',
    flexWrap: "wrap",
  },
  des: {
    color: 'rgb(253,164,117)',
    fontSize: 15,
    justifyContent: 'center',
    // alignSelf: 'center',
    flexWrap: "wrap",
  },
  textContainer: {
    flexShrink: 1
  }
});

export default styles;
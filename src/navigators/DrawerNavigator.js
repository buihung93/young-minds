import { createDrawerNavigator } from 'react-navigation';

import Home from '../screens/Home';
import About from '../screens/About';
import Service from '../screens/Service';
import DrawerHeader from '../components/DrawerHeader';

export default createDrawerNavigator({
  Home,
  About,
  Service,
},
{
  initialRouteName: 'Home',
  headerMode: 'screen',
  drawerBackgroundColor:'rgb(17,28,41)',
  contentComponent: DrawerHeader,
  // contentOptions : {
  //   activeTintColor: '#fff',
  //   activeBackgroundColor: 'rgb(17,28,41)',
  //   inactiveLabelStyle: '#fff',
  //   inactiveTintColor: '#fff',
  //   itemsContainerStyle: {
  //     marginVertical: 0,
  //   },
  //   iconContainerStyle: {
  //     opacity: 1
  //   }
  // }
});
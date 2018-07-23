import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { DrawerItems } from 'react-navigation';
import styles from './styles';

const DrawerHeader = ({ items, ...props }) => {
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
      <Image resizeMode='contain' style={styles.image} container source={{uri: 'https://yma.cloud/wp-content/uploads/2014/04/yma_logo1.png'}} />
    </View>
    <DrawerItems {...props}
          items = {items}
          itemStyle={styles.itemStyle}
          activeTintColor= '#fff'
          activeBackgroundColor= '#d44900'
          inactiveLabelStyle= '#fff'
          inactiveTintColor= '#fff'
          itemsContainerStyle={styles.itemsContainerStyle}
          // itemsContainerStyle= {
          //   marginVertical: 0,
          // }
          // iconContainerStyle= {
          //   opacity: 1
          // }
        />

  </SafeAreaView>
)}

export default DrawerHeader;
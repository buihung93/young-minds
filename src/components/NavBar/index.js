import React from 'react';
import { View, Text, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const NavBar = ({
  title,
  leftIcon,
  leftAction,
  rightIcon,
  rightAction,
}) => (
  <View style={styles.container}>
    {leftIcon
      ? leftIcon 
      : <TouchableOpacity style={styles.button} onPress={leftAction ? leftAction : () => {} }>
          <Icon name='md-menu' color='#fff' size={22}/>
        </TouchableOpacity>
      }
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default NavBar;
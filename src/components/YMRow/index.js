import React from 'react';
import { View, Text, Image,  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const YMRow = ({
  title,
  des,
  img,
}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: img}}/>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title && title.toUpperCase()}</Text>
      <Text style={styles.des}>{des}</Text>
    </View>
  </View>
)

export default YMRow;
import React, { Component } from 'react';
import { ScrollView, Text, View, StatusBar, Image } from 'react-native';

import styles from './styles';
import NavBar from '../../components/NavBar';

const dummieText = [
  '• iPhone, iPad',
  '• Android',
  '• PHP',
  '• JAVA',
  '• mySQL',
  '• Oracle',
  '• PostgreSQL',
] 

export default class Service extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='rgb(17,28,41)'
          barStyle="light-content"
        />
        <NavBar title='Service' leftAction={() => this.props.navigation.toggleDrawer()} />
        <ScrollView>
          <View style={styles.textContainer}>
            <Text style={styles.h1}>
            Mobile Website and Apps Development
          </Text>
          <Image resizeMode='contain' style={styles.image} source={{uri: 'https://yma.cloud/wp-content/uploads/2011/07/mobile-300x186.png'}}/>
          <Text style={styles.regular}>
            Contact us to develop traditional or smart phone applications for different platforms, languages and databases such as
          </Text>
          {dummieText && dummieText.map((item, index) => <Text key={'shit'+index} style={styles.regular}>
              {item}
            </Text>)}
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

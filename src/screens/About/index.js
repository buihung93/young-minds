import React, { Component } from 'react';
import { ScrollView, Text, View, StatusBar } from 'react-native';

import styles from './styles';
import NavBar from '../../components/NavBar';
import YMRow from '../../components/YMRow';

const dummieText = `Young Minds Australia is an AWS consulting partner. We leverage ISO Certified international partners in order to help people achieve commercial purpose through technology. We offer a complete eco-system providing innovative and trusted solutions for businesses of any size from start-ups to MNCs.

 

Commercial success requires technology, and Young Minds Australia has been solving technology problems between companies and their clients for more than a decade. Expending our extensive knowledge of the information and communication technology industry, we aim to solve client problems and achieve maximum value from their budget, working with our clients to ensure the best possible outcome for their needs.

We also provide ICT Health Checks, delivering an honest, professional and external review of your system which includes a detailed yet simple-to-follow report.

The provision of these services places Young Minds Australia in a position to comprehensively fulfil specific client needs, with our flexible and well-informed team working to enhance and assist you relative to your company’s demands.`


export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='rgb(17,28,41)'
          barStyle="light-content"
        />
        <NavBar title='About' leftAction={() => this.props.navigation.toggleDrawer()} />
        <ScrollView>
          <View style={styles.textContainer}>
            <Text style={styles.h1}>
            About Young Minds Australia
          </Text>
            <Text style={styles.regular}>
              {dummieText}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native';

import styles from './styles';
import NavBar from '../../components/NavBar';
import YMRow from '../../components/YMRow';
const DATA = [
  {
    title: 'Aws migration',
    icon: 'https://yma.cloud/wp-content/themes/theme47929/images/iconSweets/icon_1.png',
    des: 'Cloud is the new normal. We can show you how to get started and provide ongoing support and maintenance.',
  },
  {
    title: 'WEB SITES',
    icon: 'https://yma.cloud/wp-content/themes/theme47929/images/iconSweets/icon_2.png',
    des: 'Craft sites to provide an optimal viewing experience — easy reading and navigation with a minimum of resizing, panning, and scrolling',
  },
  {
    title: 'DEVOPS ENABLEMENT',
    icon: 'https://yma.cloud/wp-content/themes/theme47929/images/iconSweets/icon_3.png',
    des: 'Leverage your team talent to create pipelines from git or bitbucket to UAT and production using cloudformation and our fastTrack toolkit.',
  },
  {
    title: 'HEALTH CHECK',
    icon: 'https://yma.cloud/wp-content/themes/theme47929/images/iconSweets/icon_4.png',
    des: 'Take advantage of our AWS Health Check service. We can discuss how a review of your current set up can lower costs and improve scalability.',
  },
]

const dummieText = `Young Minds Australia is an AWS consulting partner. We leverage ISO Certified international partners in order to help people achieve commercial purpose through technology. We offer a complete eco-system providing innovative and trusted solutions for businesses of any size from start-ups to MNCs.

Commercial success requires technology, and Young Minds Australia has been solving technology problems between companies and their clients for more than a decade. Expending our extensive knowledge of the information and communication technology industry, we aim to solve client problems and achieve maximum value from their budget, working with our clients to ensure the best possible outcome for their needs.

Young Minds unleashes the power of AWS for organisations big and small. YMA helps organisations create strategies and architectures that vastly reduce their cost and complexity of operations, provides consulting on devops maturity and cloud readiness as well as cloud setup and migration services.

We also provide AWS Health Checks, delivering an honest, professional and external review of your system which includes a detailed yet simple-to-follow report.`


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='rgb(17,28,41)'
          barStyle="light-content"
        />
        <NavBar title='Home' leftAction={() => this.props.navigation.toggleDrawer()} />
        <ScrollView>
          {
            DATA.map((item, index) => <YMRow key={`YMRow${index}`} title={item.title} des={item.des} img={item.icon} />)
          }
          <View style={styles.textContainer}>
            <Text style={styles.h1}>
              Need AWS Cloud solutions?
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

import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Image, FlatList } from 'react-native';
import Banner from '../components/Banner';
import VideoBanner from '../components/VideoBanner';
import Layout from '../constants/Layout';
import { RootStackParamList } from '../types';
import homeData from '../assets/pageData/homeData'
import Head from '../components/Head'

const source = require('../assets/images/cotton.png');

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Head />
      <VideoBanner />
      <Text style={styles.homeSection}>Home Page</Text>
      <Banner />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
  },
  homeSection: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Layout.window.padding,
  },
  img: {
    width: '30vw',
    height: '30vw'
  },
  itemStyle: {
    width: Layout.window.width,
  },
  itemImage: {
    width: Layout.window.width / 1.62,
    height: Layout.window.width / 1.62,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
  },
  description: {
    fontSize: 18,
  },
});

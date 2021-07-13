import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Banner from '../components/Banner';
import Head from '../components/Head';
import Layout from '../constants/Layout';

const source = require("../assets/images/banner/image1.jpg");

interface StoryProps {}

const Story = (props: StoryProps) => {
  return (
    <View style={styles.container}>
      <Head />
      <Banner />
      <View style={styles.section}>
        <Text style={styles.textStyle}>
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </Text>
        <Image style={styles.imagePage} source={source}/>
      </View>
      <View style={styles.section}>
        <Text style={styles.textStyle}>
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </Text>
      </View>
      <Banner />
      <View style={styles.section}>
        <Image style={styles.imagePage} source={source}/>
        <Text style={styles.textStyle}>
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.textStyle}>
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit am
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </Text>
      </View>
      <Banner />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    width: Layout.window.width,
    height: Layout.window.height / 1.62,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    width: Layout.window.width/1.62,
    padding: Layout.window.padding,
  },
  imagePage: {
    width: Layout.window.width / 1.62 /3,
    height: Layout.window.height / 1.62 - Layout.window.padding,
  }
});

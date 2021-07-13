import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Layout from '../constants/Layout';
import { ScrollView } from 'react-native';

const width = Layout.window.width;
const cardWidth = Dimensions.get('window').width;

export const data = [
    require("../assets/images/banner/image1.jpg"),
    require("../assets/images/banner/image2.jpg"),
    require("../assets/images/banner/image3.jpg"),
    require("../assets/images/banner/image4.jpg"),
    require("../assets/images/banner/image5.jpg"),
    require("../assets/images/banner/image6.jpg")
]

const Banner = () => {
  return (
    <View style={styles.container}>
          <ScrollView snapToInterval={cardWidth} decelerationRate="normal" snapToAlignment="start" horizontal>
              {data.map((source) => (
                  <View key={source} style={styles.picture}>
                      <Image style={styles.image} source={source}/>
               </View>
              ))}
          </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        height: Layout.window.height / 2.5,
        zIndex: -10,
    },
    picture: {},
    image: {
        paddingTop: 50,
        width: Layout.window.width,
        height: Layout.window.height/2.5,
    }
});

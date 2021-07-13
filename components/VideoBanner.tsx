import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';
import { Video } from 'expo-av';

interface VideoBannerProps { }


const VideoBanner = (props: VideoBannerProps) => {
  return (
    <View style={styles.container}>
          <Video style={styles.video} source={require('../assets/video/bob.mp4')} resizeMode="contain" shouldPlay={true} isMuted={true}/>
    </View>
  );
};

export default VideoBanner;

const styles = StyleSheet.create({
    container: {
      width: Layout.window.width,
        height: Layout.window.height / 3,
        zIndex: -10,
    },
    video: {
        height: Layout.window.height
    }
});

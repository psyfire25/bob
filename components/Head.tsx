import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CartThing from './CartThing';
import Logo from './Logo';
import Nav from './Nav';
import Layout from '../constants/Layout';
import Animated, { Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, useValue, withTiming } from 'react-native-reanimated';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { navStackParamList } from '../types';
import navigation from '../navigation';

interface HeadProps {
}

const Head = (props: HeadProps) => {

  const headSize = Layout.window.height / 1.6/5;
  const animateHeadSize = useSharedValue(Layout.window.height/1.5 / 1.6);

  const config = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const onScroll = useAnimatedScrollHandler((event) => {
    animateHeadSize.value = headSize;
  });

  
  const animateHeight = useAnimatedStyle(() => {
    return {
      height: withTiming(animateHeadSize.value, config),
    }
  })
  
  return (
    <Animated.View
      style={[styles.container, animateHeight]}
    >
          <CartThing />
      <Logo />
      <Nav />
    </Animated.View>
  );
};

export default Head;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    paddingTop: Layout.window.padding,
    paddingLeft: Layout.window.padding*2,
    paddingRight: Layout.window.padding*2,
    backgroundColor: 'white',
  }
});

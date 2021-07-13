import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Layout from '../constants/Layout'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';




interface MenuProps {
}

const Menu = (props: MenuProps) => {

  const menuSize = (Layout.window.width) - (Layout.window.width / 1.62);

 const animatedMenuSize = useSharedValue(0);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const menuWidth = useAnimatedStyle(() => {
    return {
      width: withTiming(animatedMenuSize.value, config),
    };
  });

  return (
    <Animated.View
      style={[{
        height: '100vh',
        backgroundColor: 'blue',
        position: 'absolute',
        top: '0',
        right: -menuSize,
      },
        menuWidth]}>
      <Text>Menu</Text>
    </Animated.View>
  );
};

export default Menu;


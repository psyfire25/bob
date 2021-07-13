import { useIsDrawerOpen } from '@react-navigation/drawer';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { menuData, subMenuData } from '../constants/menuData';
import { navStackParamList, RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

interface NavProps {
}

const Nav: React.FC<NavProps> = () => {


    const menuSize = (Layout.window.width) - (Layout.window.width / 1.62);
    const op = 1;

    const animatedMenuSize = useSharedValue(0);
    const animatedOp = useSharedValue(1);
    let isOpen = false;

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
    const source = require("../assets/images/menuBTN.svg");
    const close = require("../assets/images/menuArrowBTN.svg")

    

  const menuAnimatedWidth = useAnimatedStyle(() => {
    return {
        width: withTiming(animatedMenuSize.value, config),
    };
  });
    
    const animatedOpacity = useAnimatedStyle(() => {
        return {
            opacity: withTiming(animatedOp.value, config),
        };
    });

    const navigation = useNavigation()
        
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => {
              if (isOpen == false) {
                  animatedMenuSize.value = menuSize;
                  isOpen = true;
              } else {
                  isOpen = false;
                  animatedMenuSize.value = 0;
              }
          }}>
            <Image style={styles.burger} source={source} />
          </TouchableOpacity>
          <Animated.View
      style={[styles.menu,
                  menuAnimatedWidth,
                  animatedOpacity]}>
              {menuData.map(({ key , title, color }) => {
                  return <TouchableOpacity key={title} onPress={() => {navigation.navigate(key)}} style={styles.menuItem}>
                      <View style={styles.menuItem}><Text style={{ color: Colors.menu.title }}>{title}</Text>
                          <View style={styles.subMenuItem}>
                            {subMenuData.map(({ title, color }) => {
                                <Text key={title} style={{ color: Colors.menu.title}}>{title}</Text>
                            })}
                        </View>
                      </View>
                  </TouchableOpacity>
              })}
    </Animated.View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '31.333vw',
        height: '15vw',
    },
    burger: {
        width: '5vw',
        height: '5vw',
    },
    menu: {
        height: '100vh',
        position: 'absolute',
        top: -Layout.window.padding,
        right: -Layout.window.padding*2,
        display: 'flex',
        alignItems: 'center',
          justifyContent: 'space-around',
          overflow: 'hidden',
        zIndex: -1,
        backgroundColor: 'white',
        borderLeftWidth: 1,
        borderLeftColor: Colors.menu.title,
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subMenuItem: {
    }
});



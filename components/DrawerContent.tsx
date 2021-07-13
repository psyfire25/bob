import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView , DrawerItem } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Story from '../screens/Story';
import Shop from '../screens/Shop';
import Contact from '../screens/Contact';
import Cart from '../screens/Cart';

interface DrawerContentProps { }

const Drawer = createDrawerNavigator;

const DrawerContent = (props: DrawerContentProps) => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Story" component={Story} />
        <Drawer.Screen name="Shop" component={Shop} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {}
});

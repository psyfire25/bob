/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Home from '../screens/Home';
import { View } from 'react-native';
import Head from '../components/Head';
import Story from '../screens/Story';
import Contact from '../screens/Contact';
import Shop from '../screens/Shop';
import Cart from '../screens/Cart';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }}/>
        <Stack.Screen name="Story" component={Story} options={{ headerShown: false }}/>
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();


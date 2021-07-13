import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Head from '../components/Head';

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <View style={styles.container}>
      <Head />
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {}
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Head from '../components/Head';

interface ShopProps {}

const Shop = (props: ShopProps) => {
  return (
    <View style={styles.container}>
      <Head />
      <Text>Shop</Text>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {}
});

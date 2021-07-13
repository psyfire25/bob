import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CartNumberProps {
  cartNumber: number;
}

export let cartNumber = 1

const CartNumber = (props: CartNumberProps) => {

  return (
    <View>
      <Text style={styles.container}>{cartNumber}</Text>
    </View>
  );
};

export default CartNumber;

const styles = StyleSheet.create({
    container: {
      color: 'white'
  }
});

import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import navigation from '../navigation';
import CartNumber, { cartNumber } from './CartNumber';

const source = require("../assets/images/cart.svg");

let cartSize = cartNumber;

interface CartThingProps {

}

const addCart = () => {
  cartSize = cartNumber + 1;
}

const CartThing = (props: CartThingProps) => {
  return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => { addCart() }}>
          <Image style={styles.cartImage} source={source} />
            <View  style={styles.number}>
              <CartNumber cartNumber={cartSize}/>
              </View>
          </TouchableOpacity>
    </View>
  );
};

export default CartThing;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '15vw',
        width: '31.333vw',
    },
    cartImage: {
        width: '5vw',
        height: '5vw',
    },
    number: {
        position: 'absolute',
        fontSize: 5,
        width: 10,
        height: 10,
        top: '3.69vw',
        left: '2.55vw'
    }
});

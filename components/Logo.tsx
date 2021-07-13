import * as React from 'react';
import { Image } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

const source = require("../assets/images/logo.png");

interface LogoProps {}

const Logo = (props: LogoProps) => {
  return (
      <View style={styles.container}>
          <Image
              style={styles.logo}
              source={source}
            />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '15vh',
        width: '31.333vw',
        marginTop: '15vw',
        zIndex: 100,
    },
    logo: {
        width: '15vw',
        height: '15vw',
    }
});

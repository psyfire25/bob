import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Head from '../components/Head';
import Logo from '../components/Logo';
import Layout from '../constants/Layout';

interface ContactProps {
  userEmail: string;
  userMessage: string;
  errorMessage: string;
 }

const Contact = (props: ContactProps) => {

  const userEmail = null;
const userMessage = null;
 const errorMessage = null;

  return (
    <View style={styles.container}>
      <Head />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={() => {}}
          placeholder="Please enter your email address."
          placeholderTextColor="#000"
          autoCompleteType="email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.errorMessage}></Text>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter your message"
          placeholderTextColor="#000"
          returnKeyType="go"
        />
        <Text style={styles.errorMessage}>{}</Text>
        <TouchableOpacity
          style={styles.BTN}
        >
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  errorMessage: {},
  textInput: {
    backgroundColor: '#CCC',
    width: Layout.window.width / 1.62,
    height: Layout.window.height / 1.62 / 3,
    padding: Layout.window.padding,
    margin: Layout.window.padding,
  },
  BTN: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Layout.window.height / 1.62 / 3,
    width: Layout.window.width / 1.62,
    backgroundColor: 'red',
  },
  btnText: {
    fontSize: 32,
  },
});

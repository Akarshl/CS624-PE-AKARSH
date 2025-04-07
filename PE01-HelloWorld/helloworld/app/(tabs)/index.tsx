import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldApp = () => { // function for hello world
  return (
    <View style={styles.container}>
      <Text>Akarsh Lakshmana</Text>
      <Text>MS in Computer Science</Text>
      <Text>STC</Text>  
    </View>
  ); // name, degree program and school 
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow', // background yellow colour
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HelloWorldApp;

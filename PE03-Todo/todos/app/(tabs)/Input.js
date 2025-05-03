import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
const Input = ({ inputValue, inputChange, submitTodo }) => (  // component for adding new todos
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={inputChange}
    />
    {/* submit button to add todo */}
    <View style={styles.button}>
      <Button title="Submit" onPress={submitTodo} />
    </View>
  </View>
);
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
  },
});
export default Input;
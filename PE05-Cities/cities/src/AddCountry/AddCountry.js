import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

// Functional component to add a new country
const AddCountry = ({ addCountry, navigation }) => {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
// Handles form submission
  const handleSubmit = () => {
    if (country === '' || currency === '') {
      alert('Please complete form');
      return;
    }

    const newCountry = {
      country,
      currency,
    };

    addCountry(newCountry);

    setCountry('');
    setCurrency('');
    navigation.navigate('Countries'); // Navigate back to the Countries screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        placeholder="Country Name"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
// Define styling for the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddCountry;

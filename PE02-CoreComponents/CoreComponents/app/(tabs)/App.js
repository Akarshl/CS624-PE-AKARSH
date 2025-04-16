import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
const App = () => {  // functional component using arrow function
  const [favoriteCourse, setFavoriteCourse] = useState('');
  return ( // scrollView allows vertical scrolling
    <ScrollView style={styles.container}> 
    <View style={styles.center}>
      <Image source={require('./assets/icon.png')} style={styles.image} />
    </View>
    <Text style={styles.label}>Which course did you like?</Text>
    <TextInput /* text input for user to enter favorite course */
      style={styles.input}
      placeholder="CS624 - Full-Stack Development - Mobile App"
      value={favoriteCourse}
      onChangeText={setFavoriteCourse}
    />
    <Text style={styles.header}>Core Requirements (24 credits)</Text>
    <Text style={styles.course}>CS 504 Software Engineering</Text>
    <Text style={styles.course}>CS 506 Programming for Computing</Text>
    <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
    <Text style={styles.course}>CS 533 Computer Architecture</Text>
    <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
    <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
    <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
    <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>
    <Text style={styles.header}>Depth of Study (6 Credits)</Text>
    <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
    <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>
    <Text style={styles.header}>Capstone (3 Credits)</Text>
    <Text style={styles.course}>CS 690 Computer Science Capstone</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({ // internal styles using StyleSheet
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  center: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  header: {
    backgroundColor: 'blue', // blue to hilight the sections
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
    marginTop: 10,
  },
  course: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 4,
  },
});
export default App;
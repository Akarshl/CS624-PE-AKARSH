import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const TabBar = ({ setType, type }) => {
  const getStyle = (tabType) =>  // determines the style of each tab based on whether it's selected
    type === tabType ? [styles.tab, styles.selected] : styles.tab;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setType('All')}>
        <Text style={getStyle('All')}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setType('Active')}>
        <Text style={getStyle('Active')}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setType('Complete')}>
        <Text style={getStyle('Complete')}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};
// Styling for the TabBar component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  tab: {
    marginHorizontal: 10,
    fontSize: 30,
    color: '#666',
  },
  selected: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
export default TabBar;

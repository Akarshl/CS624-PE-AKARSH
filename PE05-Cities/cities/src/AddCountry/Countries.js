import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

// Functional component that receives a list of countries as a prop
const Countries = ({ countries }) => {
  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
        {!countries.length ? (
          <CenterMessage message="No countries added!" />
        ) : (
          countries.map((item, index) => (
            <View key={index} style={styles.countryContainer}>
              <Text style={styles.country}>{item.country}</Text>
              <Text style={styles.currency}>{item.currency}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};
// Define styles for the countries list
const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Countries;

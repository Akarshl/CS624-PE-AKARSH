import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

const Countries = ({ countries, navigation, addCountry, addLandmark }) => {
  const navigate = (item) => {
    navigation.navigate('Country', {
      country: item,
      countries,
      addLandmark,
    });
  };

  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
        {!countries.length ? (
          <CenterMessage message="No countries added!" />
        ) : (
          countries.map((item, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => navigate(item)}>
              <View style={styles.countryContainer}>
                <Text style={styles.country}>{item.country}</Text>
                <Text style={styles.currency}>{item.currency}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))
        )}
      </View>
    </ScrollView>
  );
};

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

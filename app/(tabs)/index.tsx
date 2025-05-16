import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>BURGER RATING</Text>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="gray" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for Burgers, Bars and Restaurants"
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Mini Map - Only on Mobile */}
      {Platform.OS !== 'web' && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -37.81299,
            longitude: 144.9690,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: -37.81299, longitude: 144.9690 }}
            title="Simpsons Burgers"
            description="Best Burger Restaurant in Melbourne."
          />
        </MapView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D5C8AA',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  searchWrapper: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  map: {
      width: '100%',
      height: 300,
      borderRadius: 10,
      marginBottom: 20,
    },    width: '100%',
  });
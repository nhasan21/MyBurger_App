import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Search</Text>
      <Text style={styles.text}>Start searching for delicious burgers!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5C8AA', // Match background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});


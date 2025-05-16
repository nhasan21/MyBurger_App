// notifications.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <Text style={styles.notificationText}>You have no new notifications.</Text>
      {/* You can add more notification content here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5C8AA', // Background color set here
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
  notificationText: {
    fontSize: 18,
    color: 'black',
  },
});

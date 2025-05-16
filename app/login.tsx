import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, Alert, } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  // TEMP: skip Firebase, just go to home
  const handleLogin = () => {
    // you could validate email/password here if you want
    router.replace('/(tabs)'); // ← goes to your homepage under tabs/index.tsx
  };

  return (
    <View style={styles.container}>
      {/* App logo */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' }}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Log In button navigates to home */}
      <Button title="Log In" onPress={handleLogin} />

      {/* Link to sign-up */}
      <Text
        style={styles.link}
        onPress={() => router.replace('/signup')}
      >
        Don’t have an account? Sign Up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5C8AA',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
  },
  link: {
    marginTop: 16,
    color: '#0066cc',
    textAlign: 'center',
  },
});
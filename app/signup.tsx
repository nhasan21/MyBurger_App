// app/signup.tsx
import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, Alert,
  ActivityIndicator, KeyboardAvoidingView,
  ScrollView, Platform, StyleSheet
} from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [confirm, setConfirm]         = useState('');
  const [profileName, setProfileName] = useState('');
  const [location, setLocation]       = useState('');
  const [loading, setLoading]         = useState(false);

  const handleSignUp = async () => {
    if (
      !email.trim() ||
      !password ||
      !confirm ||
      !profileName.trim() ||
      !location.trim()
    ) {
      Alert.alert('Missing fields', 'Please fill in all fields.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      const { user } = userCred;
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        profileName: profileName.trim(),
        location: location.trim(),
        createdAt: serverTimestamp()
      });
      router.replace('/(tabs)');
    } catch (err: any) {
      Alert.alert('Sign-up failed', err.message || 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Profile Name"
          placeholderTextColor="#888"
          value={profileName}
          onChangeText={setProfileName}
        />
        <TextInput
          style={styles.input}
          placeholder="Location (City, State)"
          placeholderTextColor="#888"
          value={location}
          onChangeText={setLocation}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0066cc" style={{ margin: 16 }} />
        ) : (
          <Button title="Sign Up" onPress={handleSignUp} />
        )}
        <Text style={styles.link} onPress={() => router.replace('/login')}>
          Already have an account? Log In
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex:      { flex: 1 },
  container: { backgroundColor: '#D5C8AA', padding: 24, justifyContent: 'center' },
  title:     { fontSize: 24, marginBottom: 24, textAlign: 'center' },
  input:     {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000'
  },
  link:      { marginTop: 16, color: '#0066cc', textAlign: 'center' },
});

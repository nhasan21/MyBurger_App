// app/splash.tsx
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Splash() {
  const router = useRouter();
  const spin = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(-WIDTH)).current;
  const flash = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    Animated.parallel([
      Animated.timing(slide, {
        toValue: 0,
        duration: 2000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(flash, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(flash, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();

    const id = setTimeout(() => {
      console.log('Splash finished. Navigating to home...');
      router.replace('login');
    }, 5000);

    return () => clearTimeout(id);
  }, []);

  const spinInterp = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' }}
        style={[styles.logo, { transform: [{ rotate: spinInterp }] }]}
        resizeMode="contain"
      />
      <Animated.View
        style={{
          transform: [{ translateX: slide }],
          opacity: flash,
        }}
      >
        <Text style={styles.text}>Preparing your burger app…</Text>
      </Animated.View>
    </View>
  );
}

const { width: WIDTH } = Dimensions.get('window');
const LOGO_SIZE = WIDTH * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5C8AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  text: {
    marginTop: 24,
    fontSize: 18,
    color: '#333',
  },
});



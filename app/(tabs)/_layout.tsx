import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Keep transparent background on iOS
          },
          default: {},
        }),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/search--v1.png' }}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image
                    source={{ uri: 'https://img.icons8.com/ios-filled/50/user-male-circle.png' }}
                    style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />

      {/* Rate Tab */}
      <Tabs.Screen
        name="rate"
        options={{
          title: 'Rate',
          tabBarIcon: ({ color }) => (
            <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' }}
                    style={{ width: 28, height: 28 }}
                  />
                ),
              }}
            />

      {/* Notifications Tab */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Image
                    source={{ uri: 'https://img.icons8.com/ios-filled/50/appointment-reminders--v1.png' }}
                    style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}


import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const ICON_SIZE = 28;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="TextInputScreen"
        options={{
          title: 'Bai1',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ClickCounterScreen"
        options={{
          title: 'Bai2',
          tabBarIcon: ({ color }) => <Ionicons name="search" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tabs.Screen
        name="WeatherScreen"
        options={{
          title: 'Bai3',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weather-partly-cloudy" size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="TodoScreen"
        options={{
          title: 'Bai4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-check-outline" size={ICON_SIZE} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

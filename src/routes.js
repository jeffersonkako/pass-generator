import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => {
          if (focused) {
            color = '#FFa91a';
            return <Ionicons name="home" size={size} color={color} />
          }
          return <Ionicons name="home-outline" size={size} color={color} />
        }
      }} />
      <Tab.Screen name="Passwords" component={Passwords} options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => {
          if (focused) {
            color = '#FFa91a';
            return <Ionicons name="lock-closed" size={size} color={color} />
          }
          return <Ionicons name="lock-closed-outline" size={size} color={color} />
        }
      }} />
    </Tab.Navigator>
  );
}
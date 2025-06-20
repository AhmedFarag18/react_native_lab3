import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import UsersPage from './UsersPage';
import AlbumsPage from './AlbumsPage';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={UsersPage}
        options={{ tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> }}
      />
      <Tab.Screen name="Albums" component={AlbumsPage}
        options={{ tabBarIcon: () => <MaterialIcons name="photo-library" size={24} color="black" /> }}
      />
    </Tab.Navigator>
  );
}


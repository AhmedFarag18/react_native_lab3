import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './screens/Tabs';
import LoginPage from './screens/LoginPage';
import UserDetailsPage from './screens/UserDetailsPage';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="UserDetails" component={UserDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

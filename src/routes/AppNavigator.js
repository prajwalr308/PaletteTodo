
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React, { createRef } from 'react'
import Profile from '../screens/Profile/Profile';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import Todo from '../screens/Todo/Todo';
import TodoDetails from '../screens/TodoDetails/TodoDetails';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer ref={createRef()}>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="TodoDetails" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
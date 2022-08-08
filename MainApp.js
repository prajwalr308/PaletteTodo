import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import Navigator from "./src/routes/AppNavigator";
const MainApp = () => {
  return (
    <NativeBaseProvider>
    <Navigator />
  </NativeBaseProvider>
  )
}

export default MainApp
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Navigator from './src/routes/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (

    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Navigator from "./src/routes/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import MainApp from "./MainApp";
// import MainApp from "./MainApp";
import { currUser } from "./src/Context/Context";
export default function App() {
  const [user, setUser] = useState({});

  return (
    <currUser.Provider value={{ user, setUser }}>
      <MainApp />
    </currUser.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

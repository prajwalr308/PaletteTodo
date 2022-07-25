import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomAvatar from "../common/CustomAvatar/CustomAvatar";
import { Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const TodoTopBar = () => {
  return (
    <View >
      <View style={styles.firstContainer}>
        <CustomAvatar bg="indigo.500" alignSelf="center" size="lg" source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }} />
      
      <Text style={styles.text}>To do</Text>
      <Feather name="search" size={24} color="black" />
      </View>
      <View style={styles.secondContainer}>
      <FontAwesome name="sort-amount-desc" size={24} color="black" />
      <MaterialCommunityIcons name="filter-outline" size={24} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 40,
  },
    secondContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 50,
    },
    text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    },

});
export default TodoTopBar;

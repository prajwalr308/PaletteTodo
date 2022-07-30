import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import CustomAvatar from "../common/CustomAvatar/CustomAvatar";
import { Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Center } from "native-base";
import colors from "../../util/color";

const TodoTopBar = ({navigation}) => {
  return (
    <View >
      <View style={styles.firstContainer}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Profile")}>
        <CustomAvatar bg="indigo.500" alignSelf="center" size="lg" source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }} />
        </TouchableWithoutFeedback>
        
      
      <Text style={styles.text}>To do</Text>
      <Center h="39" w="39" bg="white" rounded="full" shadow={3}>
      <Feather name="search" size={24} color="#F86D70" />
      </Center>
      </View>
      <View style={styles.secondContainer}>
        <Center mr={4}  h="39" w="39" bg="white" rounded="full" shadow={3}>
      <FontAwesome name="sort-amount-desc" size={18} color={colors.pinkColor} />
      </Center>
      <Center mr={4} h="39" w="39" bg="white" rounded="full" shadow={3}>
      <MaterialCommunityIcons name="filter-outline" size={20} color={colors.pinkColor}  />
      </Center>
      <Center h="39" w="69" bg="white" rounded="xl" shadow={3} _text={{
        color: colors.pinkColor,
      }}>
      by me
      </Center>
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
    marginRight: 40,
    
    },
    text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    color:colors.pinkColor
    },

});
export default TodoTopBar;

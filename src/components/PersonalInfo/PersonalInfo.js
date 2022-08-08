import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon, Input } from "native-base";
import CustomAvatar from "../common/CustomAvatar/CustomAvatar";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../../util/color";
const PersonalInfo = (props) => {
  console.log("********props**********", props.userDetails?.userFound.email);
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <CustomAvatar bg="indigo.500" alignSelf="center" size="xl" source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }} />
      </View>
      <View style={styles.inputContainer}>
        {props.isEdit ? (
          <View style={styles.inputs}>
            <Input
              ml={4}
              width={40}
              style={styles.name}
              variant="underlined"
              placeholder="Underlined"
              InputRightElement={
                <EvilIcons name="pencil" size={24} color="black" />
              }
            />
          </View>
        ) : (
          <View style={styles.textFields}>
            <Text style={styles.name}>{props.userDetails?.userFound.email}</Text>
            <View style={styles.secondaryFields}>
              <Text style={styles.age}> 25yrs </Text>
              <Text style={styles.gender}> male </Text>
              <Text style={styles.admin}>CA </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 40,
  },
  avatar: {
    marginLeft: 20,
  },
  inputs: {
    flex: 1,
  },
  textFields: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
    color: "#000",
  },
  secondaryFields: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  age: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textGray,
    marginLeft: 9,
  },
  gender: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textGray,
  },
  admin: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textGray,
  },
});

export default PersonalInfo;

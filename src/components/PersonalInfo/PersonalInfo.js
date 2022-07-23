import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon, Input } from "native-base";
import CustomAvatar from "../common/CustomAvatar/CustomAvatar";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../../util/color";
const PersonalInfo = ({ isEdit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <CustomAvatar />
      </View>
      <View style={styles.inputContainer}>
        {isEdit ? (
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
            <Text style={styles.name}>John Doe</Text>
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
    fontSize: 30,
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

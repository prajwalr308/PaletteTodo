import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../util/color";

const TodoDescription = () => {
  return (
    <View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.subPara}>Duis Lorem sunt veniam dolore proident labore. Pariatur nostrud labore
      anim proident consequat. Excepteur sint officia labore laborum in eiusmod
      mollit irure mollit. 
      </Text>
      </View>
   
    </View>
  );
};
const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
    color: colors.textBlack,
  },
  subPara: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 10,
    color: colors.textBlack,
  }
});
export default TodoDescription;

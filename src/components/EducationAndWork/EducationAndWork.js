import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import EditableCards from "../common/EditableCards/EditableCards";
import colors from "../../util/color";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const EducationAndWork = () => {
  const nameThearray = [
    {
      id: 1,
      title: "Education",
      height: "100",
      width: "180",
      icon: "school-outline",
      render: () => {
        return (
          <View>
            <Text style={styles.title}>Dallas Institute</Text>
            <Text style={styles.subText}>Computer Science</Text>
            <Text style={styles.subText}>Grade 2,DLI40123</Text>
          </View>
        );
      },
    },
    {
      id: 2,
      title: "WorkExperience",
      height: "100",
      width: "180",
      icon: "briefcase-outline",
      render: () => {
        return (
          <View>
            <Text style={styles.title}>TCS - Full Time</Text>
            <Text style={styles.subText}>Backend Engineer</Text>
            <Text style={styles.subText}>Jan, 2019 - May, 2020</Text>
          </View>
        );
      },
    },
    {
      id: 3,
      title: "Interests",
      height: "60",
      width: "180",
      icon: "heart-outline",
      render: () => {
        return (
          <View>
            <Text style={styles.title}>Music</Text>
          </View>
        );
      },
    },
    {
      id: 4,
      title: "",
      height: "30",
      width: "30",
      icon: "",
      render: () => {
        return (
          <View style={styles.social}>
           <AntDesign name="mail" size={24} color="black" />
          </View>
        );
      },
      addIconWidth: "30",
    },
  ];
  return (
    <View style={styles.container}>
      {nameThearray.map((item) => {
        return (
          <View key={item.id}>
            <View style={styles.titleContainer}>
              <Ionicons name={item.icon} size={24} color="black" />
              <Text style={styles.text}>{item.title}</Text>
            </View>
            {/* <ScrollView horizontal style={styles.scrollContianer} > */}
            <View style={styles.educationContainer}>
              <EditableCards h={item.height} w={item.width} ml={5}>
                {item.render()}
              </EditableCards>
              <EditableCards h={item.height} w={90} ml={5}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </EditableCards>
            </View>
            {/* </ScrollView > */}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginLeft: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textBlack,
  },
  subText: {
    fontWeight: "bold",
    color: colors.textGray,
  },
  educationContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 14,

    color: colors.textGray,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
 
});

export default EducationAndWork;

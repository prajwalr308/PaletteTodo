import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ZStack } from "native-base";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import EditableCards from "../../components/common/EditableCards/EditableCards";
import TodoDescription from "../../components/TodoDescription/TodoDescription";
import TodoResources from "../../components/TodoResources/TodoResources";
import TodoLinks from "../../components/TodoLinks/TodoLinks";
const TodoDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ZStack>
        <Image
          source={require("../../assets/school.png")}
          style={styles.image}
        />
        <View>
          <View style={styles.backButton}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Todo")}
            >
              <Ionicons name="chevron-back-outline" size={46} color="black" />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.title}>Apply to Montogemry College</Text>
          <View style={styles.secondaryContainer}>
            <View style={styles.subField}>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
              <View>
                <Text style={styles.subtitle}>Listed By</Text>
                <Text style={styles.subtitle}>You,at 6:00pm,May 05 2021</Text>
              </View>
            </View>
            <View style={styles.statusContainer}>
              <CustomButton
                title="REMOVED"
                onPress={() => navigation.push("Todo")}
                textColor="white"
                style={styles.button}
                size="lg"
                py={2}
                px={10}
                rounded="lg"
                variant="solid"
                bg="danger.800"
              />
              <View style={styles.statusTextFields}>
                <Text style={styles.statusSubtitle}>Completed By</Text>
                <Text style={styles.statusSubtitle}>
                  You,at 6:00pm,May 05 2021
                </Text>
              </View>
            </View>
            {/* description */}
            <TodoDescription />
            {/* resources */}
            <TodoResources />

            {/* links */}
            <TodoLinks />
          </View>
        </View>
      </ZStack>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  secondaryContainer: {
    marginLeft: 20,
  },
  subField: {
    flexDirection: "row",
  },
  statusContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  statusTextFields: {
    marginLeft: 20,
  },
  statusSubtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  descriptionContainer: {},

  image: {
    alignSelf: "flex-end",
  },
  backButton: {
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
    width: "80%",
  },
});

export default TodoDetails;

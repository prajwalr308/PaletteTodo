import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthView from "../../components/authView/AuthView";
import InputText from "../../components/common/InputText/InputText";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import colors from "../../util/color";

const Signup = ({navigation}) => {
  const [isNext, setisNext] = useState(false);
  return (
    <AuthView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to palette!</Text>
        <Text style={styles.subText}>
          {isNext
            ? "Entered email address - {email}. Please select your password"
            : "Please enter the email address that your institute has used"}
        </Text>
      </View>
      {isNext ? (
        <View>
          <View style={styles.inputContainer}>
            <InputText style={styles.input} title="Enter Password" />
            <InputText style={styles.input} title="Confirm Password" />
          </View>
          <CustomButton
            title="Register"
            onPress={() => navigation.navigate("Profile")}
            textColor="white"
            style={styles.button}
            size="lg"
            py={4}
            borderRadius="10"
            variant="solid"
            bg="black"
          />
          <Text style={styles.alreadyUser}>Already have an account?</Text>
        </View>
      ) : (
        <View>
          <InputText style={styles.inputEmail} title="Enter Email address" />

          <CustomButton
            title="Continue"
            textColor="white"
            style={styles.button}
            onPress={() => setisNext(true)}
            size="lg"
            py={4}
            borderRadius="10"
            variant="solid"
            bg="black"
          />
        </View>
      )}
    </AuthView>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    marginTop: -50,
    marginLeft: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.textBlack,
  },
  subText: {
    marginLeft: 20,
    color: colors.textGray,
    fontSize: 18,
    width: 300,
    fontWeight: "bold",
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputEmail: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginVertical: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    marginVertical: 30,
  },
  alreadyUser: {
    color: colors.textBlack,

    textAlign: "center",
    marginRight: 20,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default Signup;

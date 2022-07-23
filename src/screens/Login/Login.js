import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TextInputBase,
} from "react-native";
import React from "react";

import AuthView from "../../components/authView/AuthView";
import InputText from "../../components/common/InputText/InputText";
import Button from "../../components/common/CustomButton/CustomButton";
import CustomButton from "../../components/common/CustomButton/CustomButton";

const Login = ({ navigation }) => {
  return (
    <AuthView>
      <InputText style={styles.input}  title="Email" />
      <InputText style={styles.input} title="Password" />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="LOG IN"
          onPress={() => navigation.navigate("Profile")}
          textColor="white"
          style={styles.button}
          size="lg"
          py={4}
          variant="solid"
          bg="black"
        />
        <CustomButton
        onPress={() => navigation.navigate("Signup")}
          title="NEW USER"
          textColor="black"
          style={styles.button}
          borderWidth="3"
          textStyle={{ color: "black" }}
          borderColor="black"
          borderRadius="10"
          py={4}
          size="lg"
          variant="outline"
        />
      </View>
    </AuthView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
  },
  forgotPassword: {
    color: "#000",

    textAlign: "right",
    marginRight: 20,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
  // imageContainer: {

  //     alignItems: 'center',
  //     marginVertical: 150,

  // }
  // ,
  // inputContainer: {
  //     // flex: 3,
  // },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
       
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,

}
});

export default Login;

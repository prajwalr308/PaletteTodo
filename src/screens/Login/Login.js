import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TextInputBase,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useState } from "react";

import AuthView from "../../components/AuthView/AuthView";
import InputText from "../../components/common/InputText/InputText";
import Button from "../../components/common/CustomButton/CustomButton";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import { login } from "../../services/Api/authServices";
import { currUser } from "../../Context/Context";


const Login = ({ navigation }) => {
  const { user, setUser } =useContext(currUser);
  const[userObj,setUserObj] = useState({email: "",password: ""});
  const loginHandler = async() => {
     const userdata =await login(navigation,userObj);
     console.log("********data**********",userdata)
      setUser(userdata);
  }
  return (
    <AuthView>
      <InputText style={styles.input} title="Email" onChangeText={(text)=>setUserObj({...userObj,email:text})} />
      <InputText style={styles.input} title="Password" onChangeText={(text)=>setUserObj({...userObj,password:text})} secureTextEntry={true}/>
      
      <TouchableWithoutFeedback onPress={() => navigation.navigate("ForgotPassword")}>

        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableWithoutFeedback>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="LOG IN"
          onPress={loginHandler}
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

    width: 150,
    alignSelf: "flex-end",
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
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Login;

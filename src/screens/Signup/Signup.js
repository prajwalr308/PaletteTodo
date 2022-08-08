import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React, { useContext, useState } from "react";
import AuthView from "../../components/AuthView/AuthView";
import InputText from "../../components/common/InputText/InputText";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import colors from "../../util/color";
import { register } from "../../services/Api/authServices";
import { currUser } from "../../Context/Context";



const Signup = ({navigation}) => {
  const {user,setUser} = useContext(currUser);
  const [isNext, setisNext] = useState(false);
  const [error, setError] = useState(false);
  const [userObj,setUserObj] = useState({email: "",password: ""});
  const [tempPassword,setTempPassword] = useState("");
  const registerHandler=async()=>{
     const userdata=await register(navigation,userObj);
      console.log("********data**********",userdata)
      setUser(userdata);
    }
  const onChangeTextHandler = (text,field) => {
    if(field=="password"){
      tempPassword===text?setUserObj({...userObj, password: text}):setError(true);
    }else{setUserObj({ ...userObj, [field]: text });}
  }
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
            <InputText style={styles.input} title="Enter Password" onChangeText={(text)=>setTempPassword(text)}/>
            <InputText style={styles.input} title="Confirm Password" onChangeText={(text)=>onChangeTextHandler(text,"password")} />
          </View>
          <CustomButton
            title="Register"
            onPress={() => registerHandler()}
            textColor="white"
            style={styles.button}
            size="lg"
            py={4}
            borderRadius="10"
            variant="solid"
            bg="black"
          />
          <TouchableHighlight onPress={() => navigation.navigate("Login")}>
          <Text style={styles.alreadyUser}>Already have an account?</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View>
          <InputText style={styles.inputEmail} title="Enter Email address"  onChangeText={(text)=>onChangeTextHandler(text,"email")}/>

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

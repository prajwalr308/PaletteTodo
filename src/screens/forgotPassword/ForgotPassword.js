import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthView from "../../components/AuthView/AuthView";
import InputText from "../../components/common/InputText/InputText";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import colors from "../../util/color";

const ForgotPassword = () => {
  return (
    <AuthView>
        <View style={styles.textContainer}>
        <Text style={styles.title}>Please enter your registered email address</Text>
        <Text style={styles.subText}>
        A password reset link will be sent to your email address
        </Text>
      </View>
    <View>
          <InputText style={styles.inputEmail} title="Enter Email address" />

          <CustomButton
            title="RESET PASSWORD"
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
        </AuthView>
  )
}
const styles = StyleSheet.create({
    textContainer: {
      marginTop: -50,
      marginLeft: 30,
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 20,
      width: 290,
      color: colors.textBlack,
    },
    subText: {
      marginLeft: 20,
      color: colors.textGray,
      fontSize: 18,
      width: 300,
      fontWeight: "bold",
    },  button: {
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
   
 
  });
export default ForgotPassword
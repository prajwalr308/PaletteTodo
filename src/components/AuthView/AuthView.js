import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { Children } from 'react'

const AuthView = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container} >
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('../../assets/logo.png')} />
    </View>
    <View style={styles.inputContainer}>
        {children}
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        },
        imageContainer: {
           
            alignItems: 'center',
            marginVertical: 130,
            
        }
    })

export default AuthView
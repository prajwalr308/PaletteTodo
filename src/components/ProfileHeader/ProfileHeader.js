import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ZStack } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const ProfileHeader = ({title,navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=> navigation.popToTop()}>
      <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableWithoutFeedback>
      <Text>{title}</Text>
      <MaterialIcons name="logout" size={24} color="black" />
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 40,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,     
        shadowRadius: 2,
        elevation: 1,
       
        
    }
})
export default ProfileHeader
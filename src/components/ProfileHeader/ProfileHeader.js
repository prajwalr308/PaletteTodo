import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { ZStack } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import colors from '../../util/color'

const ProfileHeader = ({title,navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=> navigation.popToTop()}>
      <Ionicons name="chevron-back-outline" size={28} color="black" />
      </TouchableWithoutFeedback>
      <Text style={styles.header}>{title}</Text>
      <TouchableWithoutFeedback onPress={()=> navigation.navigate("Login")}>
      <MaterialIcons  name="logout" size={28} color={colors.pinkColor} />
      </TouchableWithoutFeedback>
      
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
       
        
    },
    header: {

        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textBlack,
    },

})
export default ProfileHeader
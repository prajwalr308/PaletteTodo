import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProfileHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 40,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,     
        shadowRadius: 2,
        elevation: 1,
        
    }
})
export default ProfileHeader
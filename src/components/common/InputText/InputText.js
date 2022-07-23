import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputText = ({title,...props}) => {
  return (
    <View>
      <TextInput style={styles.input} {...props} placeholder={title} />
    </View>
  )
}
const styles = StyleSheet.create({
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
})

export default InputText
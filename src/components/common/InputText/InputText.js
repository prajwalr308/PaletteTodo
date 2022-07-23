import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputText = ({style,title,...props}) => {
  return (
    <View>
      <TextInput style={style} {...props} placeholder={title} />
    </View>
  )
}


export default InputText
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button  } from "native-base";
const CustomButton = ({style,...props}) => {
  const styles = StyleSheet.create({
    text: {
       color: props.textColor,
       fontSize: 18,
       fontWeight: 'bold',
       textAlign: 'center',
     }
   })
  return (
   <Button {...props} style={style}>
            <Text style={styles.text}>{props.title}</Text>
          </Button>
  
  )
}


export default CustomButton
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TodoDescription = () => {
  return (
    <View>
       <View style={styles.descriptionContainer}>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({

})
export default TodoDescription
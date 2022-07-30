import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'

const TodoLinks = () => {
  return (
    <View >

    <View>
    <View style={styles.linkContainer}>
  <Fontisto name="world-o" size={24} color="black" />
  <Text style={styles.subtitle}>links</Text>
  </View>
  <View></View>
  </View>
  <View style={styles.links}>
    <Text>https://docs.nativebase.io/ </Text>
    <Text>https://docs.nativebase.io/ </Text>
    <Text>https://docs.nativebase.io/ </Text>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    linkContainer:{
        flexDirection: 'row',
        
      },
})
export default TodoLinks
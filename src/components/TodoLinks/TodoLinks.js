import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import colors from '../../util/color'

const TodoLinks = () => {
  return (
    <View >

    <View>
    <View style={styles.linkContainer}>
  <Fontisto name="world-o" size={18} color="black" />
  <Text style={styles.subtitle}>LINKS</Text>
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
        marginTop: 40,
      },
      subtitle:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color:colors.textBlack
      },
      links:{
        marginTop: 10,
        marginLeft: 30,
      } 
})
export default TodoLinks
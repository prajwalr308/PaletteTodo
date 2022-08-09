import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import CustomAvatar from '../common/CustomAvatar/CustomAvatar'
import { Center } from 'native-base'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import colors from '../../util/color'

const TodoCards = ({navigation,details}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('TodoDetails')}>
    <View style={styles.container}>
        <View style={styles.textContainer}>
      <Text style={styles.text}>Jun 20, 2021  </Text>
      <Text style={styles.text}>6am</Text>
      <Text>Overdue</Text>
      </View>
        <View style={styles.avatarContainer}>
        <Center h="5" w="1" bg="indigo.500" rounded="md" shadow={3} />
            <CustomAvatar ml={-5} bg="indigo.500" alignSelf="center" size="sm" source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>
            <Center h="55" w="1" bg="indigo.500" rounded="md" shadow={3} />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{details.title}</Text>
                <View style={styles.rightSubContainer}>
                <View style={styles.iconContainer}>
                <FontAwesome name="file" style={styles.icon} size={16} color="black" />
                <Ionicons name="link" style={styles.icon} size={16} color="black" />
                </View>
                <Text style={styles.status}>Open</Text>
                </View>
            </View>
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
       
    },
    avatarContainer: {
        marginLeft: -20,

    },
    textContainer: {
        marginLeft: 10,
    },
    icon  : {
        marginHorizontal: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
    },
    status: {
        fontSize: 17,
        fontWeight: "bold",
    },
    rightContainer:{
        marginTop: 10,
        marginLeft: 10,
        width: 250,

    },
    rightSubContainer: {
        marginTop: 38,
        flexDirection: "row",
        justifyContent: "space-between",


    },
    iconContainer: {
        flexDirection: "row",
    },
    text: {
        width   : "60%",
        fontWeight: "bold",
        fontSize: 17,
        color:colors.textGray
    },
    status:{
        fontWeight: "bold",
        fontSize: 18,
        color:colors.orangeColor,
    }
})
export default TodoCards
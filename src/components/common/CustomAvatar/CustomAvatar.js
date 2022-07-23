import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'native-base'

const CustomAvatar = () => {
  return (
    <Avatar bg="indigo.500" alignSelf="center" size="xl" source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }}>
          RS
        </Avatar>
  )
}

export default CustomAvatar
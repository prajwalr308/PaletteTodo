import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { ZStack } from 'native-base'
import CustomButton from '../../components/common/CustomButton/CustomButton'
import EditableCards from '../../components/common/EditableCards/EditableCards'

const TodoResources = () => {
  return (
    <View>
      <View style={styles.resourceContainer}>
        <FontAwesome name="file" size={24} color="black" />
        <Text style={styles.subtitle}>Resources</Text>
      </View>
      <View style={styles.resourceContainer}>
        <TouchableWithoutFeedback>
          <EditableCards h={99} w={106} ml={5}>
            <View>
              <FontAwesome name="file" size={34} color="black" />
              <Text>filename</Text>
            </View>
          </EditableCards>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <EditableCards h={99} w={106} ml={5}>
            <View>
              <FontAwesome name="file" size={34} color="black" />
              <Text>filename</Text>
            </View>
          </EditableCards>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <EditableCards h={99} w={106} ml={5}>
            <View>
              <FontAwesome name="file" size={34} color="black" />
              <Text>filename</Text>
            </View>
          </EditableCards>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    resourceContainer:{
        flexDirection: 'row',
        
      },
})

export default TodoResources;

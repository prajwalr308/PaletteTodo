import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../util/color";


const data = [
  {
    id: 1,
    icon: "add-circle-outline",
    isSelected: false,
  },
  {
    id: 2,
    title: "All",
    isSelected: false,
  },
  {
    id: 3,
    title: "Open",
    isSelected: false,
  },
  {
    id: 4,
    title: "Completed",
    isSelected: false,
  },
  {
    id: 5,
    title: "Closed",
    isSelected: false,
  },
  
];
const SelectionBar = ({onSelectData}) => {
const [itemData, setItemData] = useState(data);
  const onSelectHandler = (id) => {
    const temp=data.map(a => ({...a}));
    temp.map((item) => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
      }
    });
    setItemData(temp)
    onSelectData(temp,id);
  }
  return (
    <View style={styles.mainConatiner}>
      <FlatList
        horizontal
        
        data={itemData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              
              {item.title && (
                <TouchableWithoutFeedback onPress={()=>onSelectHandler(item.id)}>
                  <Text style={item.isSelected ?styles.selectedText:styles.Text}>{item.title}</Text>
                </TouchableWithoutFeedback>
              )}
              {item.icon && (
                <TouchableWithoutFeedback onPress={()=>onSelectHandler(item.id)}>
                  <View style={item.isSelected&&styles.selectedIcon}>
                   
                    <Ionicons name={item.icon} size={item.isSelected?30: 28} color={item.isSelected?colors.pinkColor:"black"} />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    marginLeft: 25,
  },
  container: {
    marginRight: 30,
    
    overflow:'hidden'
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: colors.textGray,
  },
  selectedText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: colors.pinkColor,
    borderBottomColor: colors.pinkColor,
    borderBottomWidth: 2,
  },
  selectedIcon:{
    color: colors.pinkColor,
    borderBottomColor: colors.pinkColor,
    borderBottomWidth: 2,
  }
});
export default SelectionBar;

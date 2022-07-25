import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";


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
    <View >
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
                  <View>
                   
                    <Ionicons name={item.icon} size={34} color={item.isSelected?"orange":"black"} />
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
  container: {
    marginRight: 30,
    overflow:'hidden'
  },
  Text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  selectedText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "orange",
  },
});
export default SelectionBar;

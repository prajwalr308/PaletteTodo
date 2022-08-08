import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TodoTopBar from "../../components/TodoTopBar/TodoTopBar";
import SelectionBar from "../../components/SelectionBar/SelectionBar";
import TodoCards from "../../components/TodoCards/TodoCards";
import AddTodo from "../../components/AddTodo/AddTodo";
import { currUser } from "../../Context/Context";


const Todo = ({ navigation }) => {
  const [selects, setselects] = useState();
  const [selectId, setSelectId] = useState();
  const { user } = useContext(currUser);
  const onSelectData = (data, id) => {
    setselects(data);
    setSelectId(id);
  };
  // useEffect(() => {
  //   console.log("********user**********", user);
  // }, [user])
  
  return (
    <View style={styles.container}>
      <TodoTopBar navigation={navigation} />
      <SelectionBar onSelectData={onSelectData} />
      {selectId === 1 ? (
        <AddTodo />
      ) : (
        <ScrollView>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <TodoCards key={item} navigation={navigation} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Todo;

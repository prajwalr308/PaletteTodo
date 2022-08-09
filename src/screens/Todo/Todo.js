import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TodoTopBar from "../../components/TodoTopBar/TodoTopBar";
import SelectionBar from "../../components/SelectionBar/SelectionBar";
import TodoCards from "../../components/TodoCards/TodoCards";
import AddTodo from "../../components/AddTodo/AddTodo";
import { currUser } from "../../Context/Context";
import { getApi } from "../../services/Api/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Spinner } from "native-base";

const Todo = ({ navigation }) => {
  const [selects, setselects] = useState();
  const [selectId, setSelectId] = useState();
  const [todos, setTodos] = useState([]);
  const[ loading , setLoading] = useState(true);
  const { user } = useContext(currUser);
  const onSelectData = (data, id) => {
    setselects(data);
    setSelectId(id);
  };
  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem("token_Key");
        
        const todoData = await getApi(navigation, "/todo", token);
        setLoading(false);
        console.log(todoData, "todoDat");
        setTodos(todoData.allToDos);
      } catch (error) {
        console.log(error);
        
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TodoTopBar navigation={navigation} />
      <SelectionBar onSelectData={onSelectData} />
      {selectId === 1 ? (
        <AddTodo />
      ) : (
        <ScrollView>
          {!loading ?
            todos.map((item) => (
              <TodoCards
                key={item._id}
                details={item}
                navigation={navigation}
              />
            )):  <Spinner color="secondary.500" />}
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

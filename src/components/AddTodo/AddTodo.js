import {
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Actionsheet,
  Box,
  Center,
  CheckIcon,
  FlatList,
  Input,
  ScrollView,
  Select,
  TextArea,
  ZStack,
} from "native-base";
import { Feather, Octicons } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { createApi, getApi } from "../../services/Api/requests";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlertDialogBox from "../common/AlertDialogBox/AlertDialogBox";
const AddTodo = () => {
  let [service, setService] = React.useState("");
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [userList, setUserList] = useState([]);
  const [createDetails, setCreateDetails] = useState({
    title: "",
    description: "",
    type: "",
    assignees: [],
    resource: "",
  });
  const [tokenKey, setTokenKey] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setTime(currentDate);
  };
  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem("token_Key");
        setTokenKey(token);
        const allusers = await getApi(navigation, "/user/allUsers", token);
        console.log(allusers, "Allusers");
        setUserList(allusers.allUsers);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: currentMode === "date" ? date : time,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const handleDate = (mode) => {
    showMode(mode);
  };

  const assigneeOpen = () => {
    setShow(!show);
  };
  const resetHandler = () => {
    setCreateDetails({
      title: "",
      description: "",
      type: "",
      assignees: [],
      resource: "",
    });
    setService("");
  };

  const createTodo = async () => {
    console.log(createDetails, "createDetails");
    console.log(tokenKey, "token");
    try {
      const status = await createApi(
        navigation,
        "/todo/createTodo",
        tokenKey,
        createDetails
      );
      console.log(status, "status");
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const assigneeHandler = (id) => {
    setCreateDetails({
      ...createDetails,
      assignees: [id],
    });
    setShow(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <View>
          <TouchableWithoutFeedback onPress={assigneeOpen}>
            <ZStack ml={30} mt="3">
              <Center h="42" w="40" bg="white" rounded="full" shadow={3}>
                Assignee
              </Center>
              <Center h="10" w="10" bg="white" rounded="full" shadow={3}>
                <Octicons name="person-add" size={24} color="black" />
              </Center>
            </ZStack>
          </TouchableWithoutFeedback>
          <Actionsheet isOpen={show} onClose={() => setShow(false)}>
            <Actionsheet.Content>
              {/* <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Albums
            </Text>
          </Box> */}
              <ScrollView>
                {userList.map((item) => (
                  <TouchableHighlight key={item._id}>
                    <Actionsheet.Item
                      onPress={() => {
                        assigneeHandler(item._id);
                      }}
                    >
                      {item.email}
                    </Actionsheet.Item>
                  </TouchableHighlight>
                ))}
              </ScrollView>
            </Actionsheet.Content>
          </Actionsheet>
          <Box w="3/4" ml={200} mt={-2} maxW="300">
            <Select
              selectedValue={service}
              width="150"
              borderRadius="md"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => {
                setService(itemValue);
                setCreateDetails({ ...createDetails, type: itemValue });
              }}
            >
              <Select.Item label="Global" value="Global" />
              <Select.Item label="Discrete" value="Discrete" />

              {/* <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" /> */}
            </Select>
          </Box>
        </View>
        <View>
          <Input
            variant="outline"
            width={310}
            mt={5}
            ml={9}
            bg="white"
            placeholder="Title"
            value={createDetails.title}
            onChangeText={(text) =>
              setCreateDetails({ ...createDetails, title: text })
            }
          />
          <View style={styles.rowDirection}>
            <TouchableWithoutFeedback onPress={() => handleDate("date")}>
              <ZStack
                style={{ flexDirection: "row", marginTop: 20, marginLeft: 30 }}
              >
                <Center h="42" w="145" bg="white" rounded="md" shadow={3}>
                  Due date
                </Center>
                <Feather
                  name="calendar"
                  style={{ marginLeft: 10, marginTop: 10 }}
                  size={24}
                  color="black"
                />
              </ZStack>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleDate("time")}>
              <ZStack
                style={{ flexDirection: "row", marginTop: 20, marginLeft: 150 }}
              >
                <Center h="42" w="135" bg="white" rounded="md" shadow={3}>
                  Due time
                </Center>
                <Feather
                  name="clock"
                  style={{ marginLeft: 10, marginTop: 10 }}
                  size={24}
                  color="black"
                />
              </ZStack>
            </TouchableWithoutFeedback>
          </View>
          {/* <RNDateTimePicker value={new Date()} /> */}
          {/* {open&&<RNDateTimePicker onChange={onDateChangehandler}value={date} />} */}
        </View>
        <TextArea
          mt={45}
          ml={35}
          h={20}
          placeholder="enter Description"
          bg="white"
          w="95%"
          maxW="320"
          value={createDetails.description}
          onChangeText={(text) =>
            setCreateDetails({ ...createDetails, description: text })
          }
        />
        <Input
          variant="outline"
          width={310}
          mt={5}
          ml={9}
          bg="white"
          placeholder="Enter link"
          value={createDetails.resource}
          onChangeText={(text) =>
            setCreateDetails({ ...createDetails, resource: text })
          }
        />

        {/* <Center
        mt={45}
        ml={35}
        h="92"
        w="320"
        bg="white"
        rounded="md"
        borderWidth={2}
        borderStyle="dotted"
      >
        Upload Resources
      </Center> */}
        <TouchableWithoutFeedback onPress={createTodo}>
          <Center
            mt={45}
            ml={105}
            h="42"
            w="159"
            _text={{
              color: "white",
              fontWeight: "bold",
            }}
            rounded="lg"
            bg="danger.500"
          >
            Create
          </Center>
        </TouchableWithoutFeedback>
        <AlertDialogBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="upload success"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: "row",
  },
});
export default AddTodo;

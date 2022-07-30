import {
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  CheckIcon,
  Input,
  Select,
  TextArea,
  ZStack,
} from "native-base";
import { Feather, Octicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
const AddTodo = () => {
  let [service, setService] = React.useState("");
  const [date ,setDate] = useState(new Date())
const [time, setTime] = useState(new Date())

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate;
  setDate(currentDate);
  setTime(currentDate)
};

const showMode = (currentMode) => {
  DateTimePickerAndroid.open({
    value: currentMode === 'date' ? date: time,
    onChange,
    mode: currentMode,
    is24Hour: true
  })
};
  const handleDate =(mode)=>{
    showMode(mode);
  }

  return (
    <View>
      <View>
        <TouchableWithoutFeedback>
          <ZStack ml={30} mt="3">
            <Center h="42" w="40" bg="white" rounded="full" shadow={3}>
              Assignee
            </Center>
            <Center h="10" w="10" bg="white" rounded="full" shadow={3}>
              <Octicons name="person-add" size={24} color="black" />
            </Center>
          </ZStack>
        </TouchableWithoutFeedback>
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
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Opening" value="opening" />
            <Select.Item label="Completed" value="completed" />
            <Select.Item label="Ongoing" value="Ongoing" />
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
          placeholder="Outline"
        />
        <View style={styles.rowDirection}>
          <TouchableWithoutFeedback onPress={()=>handleDate('date')}>
            <ZStack
              style={{ flexDirection: "row", marginTop: 20, marginLeft: 30 }}
            >
              <Center h="42" w="145" bg="white" rounded="md" shadow={3}>
                Due date
              </Center>
              <Feather
                name="calendar"
                style={{ marginLeft: 10,marginTop:10 }}
                size={24}
                color="black"
              />
            </ZStack>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>handleDate("time")}>
            <ZStack
              style={{ flexDirection: "row", marginTop: 20, marginLeft: 150 }}
            >
              <Center h="42" w="135" bg="white" rounded="md" shadow={3}>
                Due time
              </Center>
              <Feather
                name="clock"
                style={{ marginLeft: 10 ,marginTop:10}}
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
      />
      <Center
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
      </Center>
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
    </View>
  );
};

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: "row",
  },
});
export default AddTodo;

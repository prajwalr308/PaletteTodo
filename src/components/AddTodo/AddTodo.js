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
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-date-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
const AddTodo = () => {
  let [service, setService] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
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
          <TouchableWithoutFeedback onPress={() => setOpen(true)}>
            <ZStack
              style={{ flexDirection: "row", marginTop: 20, marginLeft: 30 }}
            >
              <Center h="42" w="145" bg="white" rounded="md" shadow={3}>
                Due date
              </Center>
              <Feather
                name="calendar"
                style={{ marginLeft: 10 }}
                size={24}
                color="black"
              />
            </ZStack>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setOpen(true)}>
            <ZStack
              style={{ flexDirection: "row", marginTop: 20, marginLeft: 150 }}
            >
              <Center h="42" w="135" bg="white" rounded="md" shadow={3}>
                Due time
              </Center>
              <Feather
                name="clock"
                style={{ marginLeft: 10 }}
                size={24}
                color="black"
              />
            </ZStack>
          </TouchableWithoutFeedback>
        </View>
        {open && <RNDateTimePicker value={new Date()} />}
        {/* {open&&<RNDateTimePicker value={new Date()} />} */}
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

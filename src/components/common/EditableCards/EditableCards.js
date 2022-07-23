import { View, Text } from "react-native";
import React from "react";
import { Center } from "native-base";

const EditableCards = ({ children,...props }) => {
  return (
    <Center {...props} bg="#fff" rounded="md" shadow={3}>
      {children}
    </Center>
  );
};

export default EditableCards;

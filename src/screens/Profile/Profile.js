import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import CustomAvatar from "../../components/common/CustomAvatar/CustomAvatar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

import { Button } from "native-base";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import EducationAndWork from "../../components/EducationAndWork/EducationAndWork";
import { currUser } from "../../Context/Context";


const Profile = ({ navigation }) => {
  const { user } = useContext(currUser);
  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation}  title="my profile" />
      <PersonalInfo isEdit={false} userDetails={user} />
      <CustomButton
        title="Edit Profile"
        textColor="black"
        style={styles.button}
        size="lg"
        py={2}
        ml={4}
        mr={4}
        mt={4}
        variant="solid"
        bg="muted.50"
      />
      <EducationAndWork />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
});

export default Profile;

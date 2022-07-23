import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AuthView from '../../components/authView/AuthView'
import InputText from '../../components/common/InputText/InputText'
import CustomButton from '../../components/common/CustomButton/CustomButton'

const Signup = () => {
  const [isNext, setisNext] = useState(false)
  return (
    <AuthView>
      <Text>Welcome to palette!</Text>
      <Text>Please enter the email address that your institute has used</Text>
      {isNext?
      <View>
      <InputText title="Enter Password" />
      <InputText title="Confirm Password" />
      <CustomButton
          title="Register"
          textColor="white"
          // style={styles.button}
          size="lg"
          py={4}
          variant="solid"
          bg="black"
        />
        </View>
      :
      <View><InputText title="Enter Email address" />
      <CustomButton
          title="Continue"
          textColor="white"
          // style={styles.button}
          onPress={() => setisNext(true)}
          size="lg"
          py={4}
          variant="solid"
          bg="black"
        />
        </View>}
    </AuthView>
  )
}

export default Signup
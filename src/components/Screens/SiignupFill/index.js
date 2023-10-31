import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUpFill = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text onPress={()=>navigation.goBack()}>SignUpFill</Text>
    </View>
  )
}

export default SignUpFill
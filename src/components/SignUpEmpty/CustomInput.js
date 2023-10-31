import { View, Text, TextInput} from 'react-native'
import React from 'react'

const CustomInput = (props) => {
  const {placeholder,onChangeText,secureTextEntry,value} = props
  return (
    <View style={{marginLeft:20,marginRight:20,marginVertical:20}}> 
    <TextInput placeholder={placeholder} onChangeText={onChangeText} style={{backgroundColor:"#EFF1EF"}} secureTextEntry={secureTextEntry} value={value}/>
</View>
  )
}

export default CustomInput
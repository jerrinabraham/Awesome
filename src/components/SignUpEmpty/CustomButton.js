import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    const{onPress,name} = props
  return (
    <TouchableOpacity style={{marginVertical:50,alignItems:"center"}} onPress={onPress}> 
    <Text style={{backgroundColor:"#DEF3E1",padding:20,width:"60%",color:"green",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:25}}>{name}</Text>
</TouchableOpacity>
  )
}

export default CustomButton
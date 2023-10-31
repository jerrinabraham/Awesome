import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = (props) => {
  return (
    <TouchableOpacity style={{marginVertical:40,alignItems:"center"}} onPress={props.onPress}> 
    <Text style={{backgroundColor:"#DEF3E1",padding:20,width:"60%",color:"lightgreen",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:25}}>{props.name}</Text>
</TouchableOpacity>

  )
}

export default Buttons
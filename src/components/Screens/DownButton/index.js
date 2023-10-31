import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DownButton = (props) => {
  return (
    <TouchableOpacity style={{flex:1,marginTop:45}} onPress={props.onPress}>

    <Text style={{backgroundColor:"#03AE1C",flex:1,padding:20,color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:18}}>{props.jack}</Text>
</TouchableOpacity>
  )
}

export default DownButton
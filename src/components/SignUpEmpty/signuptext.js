import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import Splash from '../Screens/Splash'
const Signuptext=(props)=>{
 
    return (
<TouchableOpacity style={{padding:20,marginTop:-38}}>
    
            <Text style={{fontFamily:"Nunito-ExtraBold",color:"black",fontSize:35}}>{props.hello}</Text>
    </TouchableOpacity>
  )
}

export default Signuptext
import { View, Text, Image, ImageBackground, TouchableOpacity,TouchableHighlight,TouchableNativeFeedback } from 'react-native'
import React,{useState} from 'react'
import Splash from '../Screens/Splash'

const index = () => {
   

  
  return (
    <View style={{}}>

<ImageBackground  source={require('../../../assets/images/InitialSlidesecond.png')} style={{width:"100%",height:"100%",resizeMode:"stretch"}} activeOpacity={0.5}>
<TouchableHighlight style={{marginLeft:10,marginTop:380,width:125,height:50}} onPress={()=>{console.log("pressed")}}>

  <Text></Text>
</TouchableHighlight>








<TouchableOpacity style={{felex:1,marginTop:280,width:40,alignContent:"flex-end",marginHorizontal:345}} onPress={()=>console.log("jerrin")}>
  <Text></Text>

</TouchableOpacity>





</ImageBackground>
    </View>
  )
}

export default index









        // style={{justifyContent:"flex-end",flex:1,marginBottom:30,alignItems:"flex-end"}}
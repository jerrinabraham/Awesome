import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Replicate = (props) => {
  return (
    <View>
                <TextInput placeholder='Today'  style={{backgroundColor:"#EFF1EF",height:70}}/>
            
            <View style={{marginVertical:-90,marginLeft:15}}>


            <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>{props.name}</Text>
        </View>
</View>
  )
}

export default Replicate
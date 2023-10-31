import { View, Text, Image, TextInput, ImageBackground, Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MapScreen=()=>{
  const navigation=useNavigation()
  console.log("navigation",navigation)
  return (
    <View style={{flex:1}}>
        <TextInput placeholder='Search'  placeholderTextColor="grey" style={{backgroundColor:"white",flex:1,marginVertical:10}}>
       
        </TextInput>
        <ImageBackground source={require('../../../../assets/images/Map.png')} style={{width:"100%",height:"100%",flex:12,marginTop:-20}}>
        
            <TouchableOpacity style={{justifyContent:"flex-end",flex:1}} onPress={()=>navigation.navigate("AppFooter")}>

                  <Text style={{backgroundColor:"#03AE1C",padding:20,color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:18}}>Done</Text>
          </TouchableOpacity>
          
        </ImageBackground>
     
    </View>
  )
}

export default MapScreen


//
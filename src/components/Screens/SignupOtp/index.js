import { View, Text,StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Splash from '../Splash'
import { useNavigation } from '@react-navigation/native'

const Singnupotp = () => {
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor:"white",flex:1}}>

            <Splash hello="Verification..."/>
                
                <View style={{padding:20}}>
                    
                    <Text style={styles.text}>Verification...</Text>
            
                            <View style={{marginVertical:10}}>

                                        <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                                        <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
                            </View>
                </View>
                
                
                <View style={{marginTop:-100}}>
                    <Image source={require("../../../../assets/images/Otpimage.png")} style={{width:"105%",height:"55%",resizeMode:"center"}}/>
                    
                    <View style={{marginVertical:15,flexDirection:"row",justifyContent:"space-around",}}>
                        <TextInput style={{marginRight:10,width:80,height:82,borderColor:"#CFD4D0",borderWidth:1,textAlign:"center",backgroundColor:"#CFD4D0",borderRadius:10}}/>
                        <TextInput  style={{marginRight:10,width:80,height:82,borderColor:"#CFD4D0",borderWidth:1,textAlign:"center",backgroundColor:"#CFD4D0",borderRadius:10}}/>
                        <TextInput style={{marginRight:10,width:80,height:82,borderColor:"#CFD4D0",borderWidth:1,textAlign:"center",backgroundColor:"#CFD4D0",borderRadius:10}}/>
                        <TextInput style={{marginRight:10,width:80,height:82,borderColor:"#CFD4D0",borderWidth:1,textAlign:"center",backgroundColor:"#CFD4D0",borderRadius:10}}/>
                
                    </View>
                    <View style={{alignItems:"flex-end",marginRight:15}}>
                        <Text style={{color:"#8CFA9C",fontSize:20}}>Resend OTP</Text>
                    </View>
                    <TouchableOpacity style={{alignItems:"center",marginVertical:10}} onPress={()=>navigation.navigate("MapScreen")}>
                        <Text style={{fontSize:25,backgroundColor:"#BDF9C5",width:180,height:50,textAlign:"center",paddingTop:5}}>Verify</Text>
                    </TouchableOpacity>
               
                </View>

              

         
    </View>
   
  )
}

export default Singnupotp


const styles=StyleSheet.create({
    text:{
     
     fontFamily:"Fuzzy-Bubbles-Bold",
     fontWeight:"bold",
     color:"black",
     
      fontSize:30
    }
  })
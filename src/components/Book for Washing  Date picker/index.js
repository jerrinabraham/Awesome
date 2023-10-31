import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Signuptext from '../SignUpEmpty/signuptext'
import Splash from '../Screens/Splash'

import Buttons from '../Screens/Button'
import Appy from '../Calendar'

const BookforWashingDatepicker = () => {
  return (
    <ScrollView style={{backgroundColor:"white"}}>
        
            <View style={{alignItems:"flex-end",flexDirection:"row",justifyContent:"space-between"}}> 
                <Signuptext hello="Washing"/>
                <Image  source={require('../../../assets/images/bell.png')} style={{width:72,height:40,marginVertical:20}}/>
            </View>

                    <View style={{marginLeft:20}}> 
                        <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                        <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
                    </View>

                       
                       
                        
                        
                        
                        <View style={{marginLeft:20,marginRight:20,marginTop:40}}> 
                                
                            
                                <TextInput placeholder='Today'  style={{backgroundColor:"#EFF1EF",height:70}}/>
                            
                                    <View style={{marginVertical:-90,marginLeft:15}}>

                                        <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>When</Text>
                                    </View>

                        </View>
                              




                        <View style={{marginLeft:20,marginRight:20,marginVertical:100}}> 
                                
                            
                                <TextInput placeholder='238 allahabad street, sanitorium, chennai'  style={{backgroundColor:"#EFF1EF",height:70}}/>
                            
                                    <View style={{marginVertical:-90,marginLeft:15}}>

                                        <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>From</Text>
                                    </View>

                        </View>
                       
                              





                        
                        <View style={{marginLeft:20,marginRight:20,marginTop:20}}> 
                                
                            
                                <TextInput placeholder='O nos'  style={{backgroundColor:"#EFF1EF",height:70}}/>
                            
                                    <View style={{marginVertical:-90,marginLeft:15}}>

                                        <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>Quantity</Text>
                                    </View>

                              
                        </View>


                                <View style={{marginVertical:80,alignItems:"center"}}>
                                    

                                    <View style={{alignItems:"center"}}>
                                            <Text style={{textAlign:"center",backgroundColor:"#DEF3E1",padding:20,width:"40%",color:"lightgreen",fontWeight:"bold",fontSize:14}}>Continue Booking</Text>
                                        </View>
                                       <Appy/>
                                   
                                        </View>

                                
                              



               
               
               
               
                </ScrollView>

        




                                      
                      
                        
                               
            
        
    

  )
}

export default BookforWashingDatepicker
                          


// <Image source={require('../../../assets/images/calendar.png')} style={{width:"100%",height:200,marginLeft:15}}/>
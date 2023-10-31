import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Signuptext from '../SignUpEmpty/signuptext'
import Cards from './Cards'
import CardsForSignOut from './CardsForSignOut'

const More = () => {


  return (
    <View style={{backgroundColor:"white",flex:1}}>
        
    <View style={{alignItems:"flex-end",flexDirection:"row",justifyContent:"space-between"}}> 
        <Signuptext hello="Philip"/>
        <Image  source={require('../../../assets/images/bell.png')} style={{width:72,height:40,marginVertical:20}}/>
    
    </View>
    <TouchableOpacity><Text style={{color:"green"}}>View Profile</Text></TouchableOpacity>
    <View style={{backgroundColor:"lightgrey"}}>
      <Text></Text>
    </View>
    <Cards PhoneNumberText="PhoneNumber" Number="985434"/>
    <Cards PhoneNumberText="Address" Number="Parasx"/>
    <Cards PhoneNumberText="Payments" Number="Axis Credit Card"/>
    <Cards PhoneNumberText="Notifications" Number="Notify by Process"/>
    <Cards PhoneNumberText="Support" />
    <Cards PhoneNumberText="Share" />
    <Cards PhoneNumberText="Terms and Conditions" />
    <CardsForSignOut PhoneNumberText="SignOut" type="x" />
   
    </View>
  )
}

export default More
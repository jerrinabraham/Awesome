import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BookingConfirm = () => {
  return (
    <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",flex:1}}>

      <Image source={require('../../../assets/images/iconbookingconfirmed.png')} style={{width:80,height:80}}/>
    <View style={{marginVertical:15,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:22,fontFamily:"Nunito-ExtraBold",color:"black"}}>Booking Confirmed</Text>
            
            <View style={{alignItems:"center",marginTop:18}}>
                        <Text style={{fontSize:16}}>Nulla vitae elit libero, a pharetra augue. Donec id elit</Text>
                        <Text style={{fontSize:16}}>non mi porta gravida at eget metus. Donec</Text>
                        <Text style={{fontSize:16}}>ullamcorper nulla non metus auctor fringilla.</Text>
            </View>
            <TouchableOpacity style={{marginTop:100}}>

              <Text style={{fontSize:22,fontFamily:"Nunito-Bold",color:"red"}}>Close</Text>
            </TouchableOpacity>
              
    </View>
    </View>
  )
}

export default BookingConfirm


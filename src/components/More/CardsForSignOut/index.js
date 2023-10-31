import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CardsForSignOut = (props) => {
    const navigation = useNavigation()
  return (
  
    <View style={{backgroundColor:"white",margin:20}}>

    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:-10}}>
    <TouchableOpacity onPress={()=>{navigation.navigate("LoginFill",{passowrdTexthide:""})}}><Text style={{color:"red"}}>{props.PhoneNumberText}</Text></TouchableOpacity>
      <Text style={{color:"red"}}>{props.Number}</Text>
    </View>
      



    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
            {/* <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/> */}
  <View>
  </View>
   
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
       







    </View>
  )
}

export default CardsForSignOut
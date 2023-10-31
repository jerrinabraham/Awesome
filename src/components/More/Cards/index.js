import { View, Text } from 'react-native'
import React from 'react'

const Cards = (props) => {
  return (
    // const lmi =type==="x"?color="red":color="green"
    <View style={{backgroundColor:"white",margin:20}}>

    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text>{props.PhoneNumberText}</Text>
      <Text style={{color:"green"}}>{props.Number}</Text>
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

export default Cards
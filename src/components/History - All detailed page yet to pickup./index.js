import { View, Text, Image,Seperator, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ProgressBars from '../progress'

const HistoryYetToPickUp = () => {
    const image=<Image source={require('../../../assets/images/rupeesicon.png')}/>
  return (
    <ScrollView style={{flex:1,padding:35,backgroundColor:"white",marginVertical:30}}>
       
      <Text style={{fontSize:22,color:"black"}}>Order ID</Text>
      <Text style={{marginTop:10,fontSize:18}}>#LNDRY00012355</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:10}}>
        <Text style={{fontSize:22,color:"grey",color:"black"}}>Total</Text>
        <Text style={{fontSize:22,marginTop:10,color:"green"}}>800</Text>
      </View>
      


      
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text>cotton</Text>
        <Text>   5nos</Text>
        <Text>200</Text>
      </View>



      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    {/* <Text style={{width: 50, textAlign: 'center'}}>Hello</Text> */}
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
       


      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <Text>Lenin</Text>
        <Text>     3nos</Text>
        <Text>200</Text>
      </View>




      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    {/* <Text style={{width: 50, textAlign: 'center'}}>Hello</Text> */}
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>


      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <Text>Polyster</Text>
        <Text>8nos</Text>
        <Text>200</Text>
      </View>







      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    {/* <Text style={{width: 50, textAlign: 'center'}}>Hello</Text> */}
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

      <View style={{marginVertical:20}}>
        <Text style={{fontSize:22,color:"black"}}>Status</Text>
      </View>
      <ProgressBars/>
      <View style={{marginVertical:20}}>
        <Text style={{color:"black"}}>Washing          Drying                Ironing        Delivered</Text>
      <View style={{marginVertical:20}}>
        <Text style={{fontSize:22,color:"black"}}>Delivered To</Text>
        <Text style={{color:"black",marginVertical:10,fontSize:17.58}}>238 allahabad street ,sanitorium,chennai</Text>
      </View>
      </View>

      
      
      <View>
        <Text style={{color:"red",backgroundColor:"#FDE2E8",padding:20,textAlign:"center",fontSize:22}}>Cancel Booking</Text>
      </View>
      
    </ScrollView>
  )
}

export default HistoryYetToPickUp


{/* <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}} */}
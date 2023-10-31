import { View, Text, Image,Seperator, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ProgressBars from '../progress'
import RazorpayCheckout from 'react-native-razorpay';

import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from "@env"

const HistoryYetToPay = () => {
    // const image=<Image source={require('../../../assets/images/rupeesicon.png')}/>
    let razorpayKeyId = RAZORPAY_KEY_ID
    let razorpayKeySecret = RAZORPAY_KEY_SECRET
  
    const amount = 100;
    const currency ="INR"
  
    const hadlePayment=()=>{
      var options = {
        description: 'Credits towards consultation',
        image: 'https://reactnative.dev/docs/assets/p_cat2.png',
        currency: currency,
        key: razorpayKeyId,
        amount:amount*100,
        name: 'Acme Corp',
        order_id: '',//Replace this with an order_id created using Orders API.
        prefill: {
          email: 'gaurav.kumar@example.com',
          contact: '9191919191',
          name: 'Gaurav Kumar'
        },
        theme: {color: '#53a20e'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
    }
  return (
    <ScrollView style={{flex:1,padding:25,backgroundColor:"white"}}>
       
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
        <Text style={{color:"black",marginVertical:10,fontSize:17.58}}>{"address"}</Text>
      </View>
      </View>

      
      
      <View style={{backgroundColor:"white",flexDirection:"row"}}>

                        <TouchableOpacity style={{flex:1,marginRight:15}}>
                            <Text style={{backgroundColor:"#E6E6E6",textAlign:"center",height:"100%",fontSize:22,color:"black",paddingTop:10,paddingBottom:10}}>Mail Invoice</Text>
                        </TouchableOpacity> 


                        <TouchableOpacity style={{flex:1,marginLeft:15}} onPress={hadlePayment} >
                            <Text style={{backgroundColor:"#D7F5DC",textAlign:"center",height:"100%",fontSize:22,color:"green",paddingTop:10,paddingBottom:10}}>Pay</Text>
                        </TouchableOpacity> 

      </View>
      
    </ScrollView>
  )
}

export default HistoryYetToPay


{/* <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}} */}
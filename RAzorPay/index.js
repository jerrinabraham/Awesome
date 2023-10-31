import { View, Text } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';

import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from "@env"


const App = () => {

 

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
    <View>
      <Text>App</Text>
      <Text onPress={hadlePayment}>Press it</Text>
    </View>
  )
}

export default App
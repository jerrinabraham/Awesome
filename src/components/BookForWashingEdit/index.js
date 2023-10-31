import { View, Text, Image, TextInput, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import Signuptext from '../SignUpEmpty/signuptext'
import Splash from '../Screens/Splash'

import Buttons from '../Screens/Button'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker';





const BookForWashingssss = ({route}) => {

const navigation= useNavigation()
    const [when, setWhen] = useState('')
    const [from, setFrom] = useState('')
    const [quantity, setQuantity] = useState('')


    const [selectedStartDate, setfirst] = useState(null)
    const [fire,setFire] = useState(false)
    // const [isLoading, setIsloading] = useState(false)

    const jerrald= route.params.cardId
    const whener = route.params.when
  
   
    
    // setIsloading(false)

    useEffect(() => {
      setWhen(route.params.when)
      setFrom(route.params.from)
      setQuantity(route.params.quantity)
    

    }, [jerrald])
    
  
              
    
                    const onDateChange=(date)=> {
                                setfirst(date)
                              }
            
    
   
    const continueBookingHandler=async(cardId)=>{
      
      
        try {
            if (when!=="" && from!=="" && quantity!=="") {
              // setIsloading(true)
                const userDatas={
                    whens:when,
                    froms:from.trim(),
                    quantitys:quantity.trim()
                }
      
              await firestore().collection('Users').doc(cardId).update(userDatas)
      
              navigation.navigate("HistoryAll")
              // setIsloading(false)
      
             
            } else {
              alert('Please Enter Value & Then Try Again');
            }
          } catch (err) {
            console.log(err);
          }
         
          
        };
       
     
          
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const Handler=()=>{
   
          
                 setFire(true)
                 
                 
                 
               }
              
              
          
           
        
        
        
        
  
  return (

      <ScrollView>
      <View style={{backgroundColor:"white"}}>
          
              <View style={{alignItems:"flex-end",flexDirection:"row",justifyContent:"space-between"}}> 
                  <Signuptext hello="Washing"/>
                  <Image  source={require('../../../assets/images/bell.png')} style={{width:72,height:40,marginVertical:20}}/>
              </View>
  
                      <View style={{marginLeft:20}}> 
                          <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                          <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
                      </View>
  
                         
                         
                          
                          
                          
                          <View style={{marginLeft:20,marginRight:20,marginTop:40}}> 
                                  
                              
                                
                                  <TextInput placeholder='Date'  onChange={Handler} value={when} style={{backgroundColor:"#EFF1EF",height:70}}/> 
                              
                                      <View style={{marginVertical:-90,marginLeft:15}}>
  
                                          <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>When</Text>
                                      </View>
  
                          </View>
                                
                          {fire?<View style={{backgroundColor: 'red',marginTop:100}}>
                                      <CalendarPicker
                                      
                                      onDateChange={(date)=>onDateChange(date)}
                                      selectedDayTextColor="white"
                                      todayBackgroundColor="green"
                                      />
  
  
                                      </View>
                                      :null} 
  
  
  
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          <View style={{marginLeft:20,marginRight:20,marginVertical:100}}> 
                                  
                              
                                  <TextInput value={from} style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setFrom(text)}/>
                              
                                      <View style={{marginVertical:-90,marginLeft:15}}>
  
                                          <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>From</Text>
                                      </View>
  
                          </View>
                         
                                
  
  
  
  
  
                          
                          <View style={{marginLeft:20,marginRight:20,marginTop:20}}> 
                                  
                              
                                  <TextInput value={quantity} style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setQuantity(text)}/>
                              
                                      <View style={{marginVertical:-90,marginLeft:15}}>
  
                                          <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>Quantity</Text>
                                      </View>
  
                                
                          </View>
  
  
  <View style={{marginVertical:40}}>
  
                        <TouchableOpacity style={{marginVertical:60,alignItems:"center"}} onPress={continueBookingHandler.bind(this,jerrald,whener)}>
                          <Text style={{textAlign:"center",backgroundColor:"#DEF3E1",padding:20,width:"40%",color:"green",fontWeight:"bold",fontSize:14}}>Continue Bookings</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:16}}>Note</Text>
                        <Text style={{fontSize:14}}>Price is decided by the pickup man at the time of</Text>
                        <Text style={{fontSize:14}}>collecting your clothes</Text>
  </View>
  
  <View>
    
  </View>
  
      </View>
      
      </ScrollView>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
  )
}

export default BookForWashingssss
                                
                                      
                      
                        
                               
            
        
                             








                              





                                      
                      
                        
                               









                                      
                      
                        
                               
                      







                       
                       
                    

            
            
                        
               
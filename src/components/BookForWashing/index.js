import { View, Text, Image, TextInput, TouchableOpacity, ScrollView ,ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import Signuptext from '../SignUpEmpty/signuptext'
import Splash from '../Screens/Splash'
import Replicate from './replicate'
import Buttons from '../Screens/Button'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native'


import CalendarPicker from 'react-native-calendar-picker';





const BookForWashing = () => {
const navigation= useNavigation()
    const [when, setWhen] = useState('')
    const [from, setFrom] = useState('')
    const [quantity, setQuantity] = useState('')


    const [selectedStartDate, setfirst] = useState(null)
    const [fire,setFire] = useState(false)
    const [isLoading, setIsloading] = useState(false)


    const onDateChange=(date)=> {
   
        setfirst(date)
      }
      
      
      
     
     
    


    const continueBookingHandler=async(x)=>{

         console.log("entered handler with value o f x is ", x)
               
        setWhen(x)
        if (when!=="" && from!=="" && quantity!=="") {
             
          
            
                
            setIsloading(true)
            const userDatas={
                
                whens:when,
            froms:from.trim(),
            quantitys:quantity.trim()
        }
        await firestore()
        .collection("Users")
        .add(userDatas)
        .then(resp=>{
            console.warn("resp",resp)
           
          
               

        
              navigation.navigate("HistoryAll")
                
              }) 
              setIsloading(false)
           
              .catch(err=>{
                  console.warn(err)
              })

             
             
          }else{
              null
          }
       

       
      
     }
          
    
              
              
          
           
        
        
        
     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
     const Handler=()=>{

       
              setFire(true)
              
              
              
            }
            
    //  console.log("startDate",startDate)
  
  return (
    <View style={{flex:1}}>

{isLoading?<View style={{flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,

}}><ActivityIndicator  size="large"/></View>:

















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
                            
                        
                            {/* <TextInput placeholder='Date'   onChangeText={(text)=>setWhen(text)} value={when} style={{backgroundColor:"#EFF1EF",height:70}}/> */}
                            <TextInput placeholder='Date'  onChange={Handler} value={startDate} style={{backgroundColor:"#EFF1EF",height:70}}/> 
                          


                                <View style={{marginVertical:-90,marginLeft:15}}>
                                    

                                    <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>When</Text>
                                
                                </View>
                                

                    </View> 
                          

   
{fire?<View style={{marginTop:100}}>
                                <CalendarPicker
                                
                                onDateChange={(date)=>onDateChange(date)}
                                selectedDayTextColor="white"
                                todayBackgroundColor="green"
                                />


                                </View>
                                :null} 
                           
                                
                               
                               
                               

                    <View style={{marginLeft:20,marginRight:20,marginVertical:80}}> 
                            
                        
                            <TextInput placeholder='Address'  style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setFrom(text)}/>
                        
                                <View style={{marginVertical:-90,marginLeft:15}}>

                                    <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>From</Text>
                                </View>

                    </View> 
                   
                          





                    
                    <View style={{marginLeft:20,marginRight:20,marginTop:20}}> 
                            
                        
                            <TextInput placeholder='O nos'  style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setQuantity(text)}/>
                        
                                <View style={{marginVertical:-90,marginLeft:15}}>

                                    <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>Quantity</Text>
                                </View>

                          
                    </View> 


            <View style={{marginVertical:40}}>

                                <TouchableOpacity style={{marginVertical:60,alignItems:"center"}} onPress={()=>continueBookingHandler(startDate)}>
                                    <Text style={{textAlign:"center",backgroundColor:"#DEF3E1",padding:20,width:"40%",color:"green",fontWeight:"bold",fontSize:14}}>Continue Bookings</Text>
                                </TouchableOpacity>
                                
                                            <View style={{marginLeft:20}}>
                                                    <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>Note</Text>
                                                    <Text style={{fontSize:14}}>Price is decided by the pickup man at the time of</Text>
                                                    <Text style={{fontSize:14}}>collecting your clothes</Text>

                                            </View>
            </View>



                                  
                  
                    
                           
        
    
</View>

</ScrollView>

}
    </View>


































//     <ScrollView>
//     <View style={{backgroundColor:"white"}}>
        
//         <View style={{alignItems:"flex-end",flexDirection:"row",justifyContent:"space-between"}}> 
//                 <Signuptext hello="Washing"/>
//                 <Image  source={require('../../../assets/images/bell.png')} style={{width:72,height:40,marginVertical:20}}/>
//             </View>

//                     <View style={{marginLeft:20}}> 
//                         <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
//                         <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
//                     </View>

                       
                       
                        
                        
                        
//                      <View style={{marginLeft:20,marginRight:20,marginTop:40}}> 
                                
                            
//                                 {/* <TextInput placeholder='Date'   onChangeText={(text)=>setWhen(text)} value={when} style={{backgroundColor:"#EFF1EF",height:70}}/> */}
//                                 <TextInput placeholder='Date'  onChange={Handler} value={startDate} style={{backgroundColor:"#EFF1EF",height:70}}/> 
                              


//                                     <View style={{marginVertical:-90,marginLeft:15}}>
                                        

//                                         <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>When</Text>
                                    
//                                     </View>
                                    

//                         </View> 
                              

       
//  {fire?<View style={{marginTop:100}}>
//                                     <CalendarPicker
                                    
//                                     onDateChange={(date)=>onDateChange(date)}
//                                     selectedDayTextColor="white"
//                                     todayBackgroundColor="green"
//                                     />


//                                     </View>
//                                     :null} 
                               
                                    
                                   
                                   
                                   

//                         <View style={{marginLeft:20,marginRight:20,marginVertical:80}}> 
                                
                            
//                                 <TextInput placeholder='Address'  style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setFrom(text)}/>
                            
//                                     <View style={{marginVertical:-90,marginLeft:15}}>

//                                         <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>From</Text>
//                                     </View>

//                         </View> 
                       
                              





                        
//                         <View style={{marginLeft:20,marginRight:20,marginTop:20}}> 
                                
                            
//                                 <TextInput placeholder='O nos'  style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setQuantity(text)}/>
                            
//                                     <View style={{marginVertical:-90,marginLeft:15}}>

//                                         <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>Quantity</Text>
//                                     </View>

                              
//                         </View> 


//                 <View style={{marginVertical:40}}>

//                                     <TouchableOpacity style={{marginVertical:60,alignItems:"center"}} onPress={continueBookingHandler.bind(this,startDate)}>
//                                         <Text style={{textAlign:"center",backgroundColor:"#DEF3E1",padding:20,width:"40%",color:"green",fontWeight:"bold",fontSize:14}}>Continue Bookings</Text>
//                                     </TouchableOpacity>
                                    
//                                                 <View style={{marginLeft:20}}>
//                                                         <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>Note</Text>
//                                                         <Text style={{fontSize:14}}>Price is decided by the pickup man at the time of</Text>
//                                                         <Text style={{fontSize:14}}>collecting your clothes</Text>

//                                                 </View>
//                 </View>



                                      
                      
                        
                               
            
        
//     </View>

//     </ScrollView>
    

  )
}
                                   
                                   



// Tue Oct 03 2023 12:00:00 GMT+0530
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                          

                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                              




                        {/* <View style={{marginLeft:20,marginRight:20,marginVertical:100}}> 
                                
                            
                                <TextInput placeholder='Address'  style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setFrom(text)}/>
                            
                                    <View style={{marginVertical:-90,marginLeft:15}}>

                                        <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>From</Text>
                                    </View>

                        </View> */}
                       
                              





                        
                        {/* <View style={{marginLeft:20,marginRight:20,marginTop:20}}> 
                                
                            
                                <TextInput placeholder='O nos'  style={{backgroundColor:"#EFF1EF",height:70}} onChangeText={(text)=>setQuantity(text)}/>
                            
                                    <View style={{marginVertical:-90,marginLeft:15}}>

                                        <Text style={{backgroundColor:"#03AE1C",padding:10,width:"30%",color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:15}}>Quantity</Text>
                                    </View>

                              
                        </View> */}


{/* <View style={{marginVertical:40}}>

                      <TouchableOpacity style={{marginVertical:60,alignItems:"center"}} onPress={continueBookingHandler}>
                        <Text style={{textAlign:"center",backgroundColor:"#DEF3E1",padding:20,width:"40%",color:"green",fontWeight:"bold",fontSize:14}}>Continue Bookings</Text>
                      </TouchableOpacity>
                      <View style={{marginLeft:20}}>
                      <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>Note</Text>
                      <Text style={{fontSize:14}}>Price is decided by the pickup man at the time of</Text>
                      <Text style={{fontSize:14}}>collecting your clothes</Text>

                      </View>
</View>

<View>
  
</View> */}

                                      
                      
                        
                               
            
        

    


export default BookForWashing








                                
                             








                              





                                      
                      
                        
                               









                                      
                      
                        
                               
                      







                       
                       
                    

            
            
                        
               
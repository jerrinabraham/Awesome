import React,{useEffect,useState} from 'react';
  
import { View, Text, ScrollView,Image,keyboardType } from 'react-native';

import{styles} from './style'
 
import CustomInput from '../../components/CustomInput/CustomInput';

import CustomButton from '../../components/CustomButton/index';
  
import { useNavigation } from '@react-navigation/native';

import {validateOtp, validatephone} from './controller'
  
import auth from '@react-native-firebase/auth';

import Snackbar from 'react-native-snackbar';

import{Dimensioncontext} from '../../context/index'





export default function LoginPhone() {

  const [phone, setphone] = useState("")
  // const [fipasswordrst, setPassword] = useState("")
  const [error, setError] = useState(null)
  
  const [Otp, setOtp] = useState("")
  
  const [showOtp, setShowOtp] = useState(false)
  
  const [confirm, setConfirm] = useState(null);


          const navigation = useNavigation()

          const dimensions=Dimensioncontext()

// function onAuthStateChanged(user) {
//  console.warn(user)
// }



// useEffect(() => {
//   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber; 
// }, []);

          



const handleButtonPress=async ()=>{
                try {
                        if(validatephone(phone)){
                         
                          const confirmation = await auth().signInWithPhoneNumber(phone);
                          if(confirmation){
                            Snackbar.show({
                              text: 'Otp has been sent your mobile, please verify',
                              duration: Snackbar.LENGTH_SHORT,
                              backgroundColor:"red",
                              textColorcolor:"green"
                              });
                            setConfirm(confirmation)
                            setShowOtp(true)
                          }
                        }else{
                          setError("Given phone number is incoorectsss")
                        }
                
                } catch (error) {
                  console.warn(error);
                  setError("Given phone number is incoorect")
                }
              }

    
    
              
                        
                        const handleVerifyOtp=async ()=>{

                          if(Otp.trim()!=="" && validateOtp(Otp.trim())){
                                
                            console.warn("res123")       
                                          const res = await confirm.confirm(Otp.trim());
                                          
                                                        
                                                  if(res){
                                                          Snackbar.show({
                                                            text: 'Your Phone number is verified, login successful',
                                                            duration: Snackbar.LENGTH_SHORT,
                                                            backgroundColor:"red",
                                                            textColorcolor:"green"
                                                            });
                                                            navigation.navigate("Home")
                                                          }
                                                          }else{
                                                            setError("Entered Otp is not valid")
                                                          }
                                                        
                                                        }
                              


    const HandlerGoToSignUp=()=>{
      navigation.navigate("SignUp")
    }
   
   
   
   
    const responsivestyleforloginphone = styles(dimensions.windowWidth,dimensions.windowHeight)
   
   
    return (
      <View style={{height:"100%"}}>
              
              <Image  style={responsivestyleforloginphone.topBg}
                      source={require('../../../assets/images/images.jpeg')}/>
              
                          <ScrollView style={responsivestyleforloginphone.ScrollView}>
                                       
                                       
                                        <Image  style={responsivestyleforloginphone.logo}
                                                source={require('../../../assets/images/images-2.jpeg')}/> 
                                                  
                                                  <Text style={responsivestyleforloginphone.loginText}>SignIn With Phone</Text>
                                                      
                                                      
                                                        {error!==null?<Text style={{color:"red"}}>{error}</Text>:null}
                                                      
                                                    
                                                    
                                            <CustomInput  handleText={(text)=>setphone(text)}
                                                          placeholder="Phone Number"
                                                          type="Phone"/> 
            
                      
                      
                      
                                    {showOtp?<CustomInput handleText={(text)=>setOtp(text)}
                                                          placeholder="Enter Otp"
                                                          type="Phone"/> :null}

                                                
                                                                    
                                                
                                                                  
                                                 <CustomButton  type="Primary" 
                                                                
                                                                buttonText={showOtp?"verify Otp":"sign in with phone"}
                                                                
                                                                handleButtonPress={showOtp?handleVerifyOtp:handleButtonPress}/>
                                                              
                                        
                                        <Text style={responsivestyleforloginphone.createNew} onPress={HandlerGoToSignUp}>Go To Login</Text>
                        
                          </ScrollView>
      </View>
                          
      );
    
    
    }
                      
                              

                         
      

                                    
                                   
                          

import firestore from '@react-native-firebase/firestore'

import React,{useEffect,useState} from 'react';

import { View, Text, ScrollView,Image } from 'react-native';

import{styles} from '../Login/style'



import { validateEmail,validatePhoneNumber } from '../components/common/validation';

import Snackbar from 'react-native-snackbar';

import CustomInput from '../components/CustomInput/CustomInput';

import CustomButton from '../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import {Dimensioncontext} from '../context/index'

export default function Login() {
  
  const [userName, setUserName] = useState("")
  
  const [email, setEmail] = useState("")
  
  const [mobile, setMobile] = useState("")

  const [passwordrst, setPassword] = useState("")
  
  const [Cpasswordrst, setCPassword] = useState("")
  
  const [error, setError] = useState(null)

  const dimensions=Dimensioncontext()
          const navigation = useNavigation()

  
  
          useEffect(() => {
               GoogleSignin.configure({
               webClientId:"584282367010-totjriemnmkd5pdhiiabv8ilm92rad34.apps.googleusercontent.com",
                });
          },[])


  
          const handleButtonPress=async()=>{
                await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true})
                }
  
    
  
  const handleSignUp=async()=>{


    if(userName.trim()!=="" &&
    email.trim()!=="" &&
    mobile.trim()!=="" &&
    passwordrst.trim()!=="" &&
    Cpasswordrst.trim()!=="" )
                {
                  if(validateEmail(email.trim())){
                    if(validatePhoneNumber(mobile.trim())){
                      if(passwordrst===Cpasswordrst){
                    
                        await firestore().collection("Users")
                        .where("userName","==",userName.trim())
                        .where("email","==",email.trim())
                        .get().then (async snapshot=>{
                          
                                      if(snapshot.empty){
                            
                                              if(validateEmail(email.trim())){
                                                            
                                                                            if(validatePhoneNumber( mobile.trim())){
                                                                                    const userData={
                                                                                      userName:userName.trim(),
                                                                                      email:email.trim(),
                                                                                      mobile:mobile.trim(),
                                                                                      password:passwordrst.trim(),
                                                                                      confirmpassword:Cpasswordrst.trim()
                                                                                      }
                                                                                      await firestore()
                                                                                      .collection('Users')
                                                                                      .add(userData)
                                                                                      .then(resp =>{
                                                                                        console.warn(resp);
                                                                                        Snackbar.show({
                                                                                          text: 'New account created',
                                                                                          duration: Snackbar.LENGTH_SHORT,
                                                                                          backgroundColor:"red",
                                                                                          textColorcolor:"green"
                                                                                           });
                                                                                           navigation.navigate("Home")
                                                                                      })
                                                                                      .catch(err=>{
                                                                                        console.warn(err)
                                                                                      })
                                                                                  }else{ setError("Given mobile number is not Valid")}
                                                  
                                                                           
                                                                               }else{
                                                                              setError("Given email is not Valid")
                                                                                }
                            
                                                        }else{
                                                          Snackbar.show({
                                                            text: 'This emil is already existing in our system, try another user name',
                                                            duration: Snackbar.LENGTH_SHORT,
                                                            backgroundColor:"red",
                                                            textColorcolor:"colors.white"
                                                            });
                                                            }
                                                          })
                                          
                                    }else{
                                      setError("Given Passwords are not Matching")
                                    }
                    }else{
                      setError("Given mobile number  is not valid")
                    }
                    
                 
                  }else{setError("Given email is not valid")}
                                              }else{
                                                  setError("fill up all the fields to continue")
                                                    }
                                
                                  }
                                    
              

                           




    
    const HandlerGoToSignUp=()=>{
      navigation.navigate("SignUp")
    }
   
    
    const responsivestyleforsignup = styles(dimensions.windowWidth,dimensions.windowHeight)
    
    return (
      
      
      <View style={{height:"100%"}}>
              
              <Image  style={responsivestyleforsignup.topBg}
                      source={require('../../assets/images/images.jpeg')}/>
              
                          
                          
                          <ScrollView style={responsivestyleforsignup.ScrollView} showsVerticalScrollIndicator={false}>
                                    <Image style={responsivestyleforsignup.logo}
                                           source={require('../../assets/images/images-2.jpeg')}/> 
                                     
                                        <Text style={responsivestyleforsignup.loginText}>Sign Up Account</Text>
                                        {error!==null?<View>
                                          <Text style={responsivestyleforsignup.errorText}>{error}</Text>
                                        </View>:null}
                                        <CustomInput  
                                                      handleText={(text)=>setUserName(text)}
                                                      placeholder="Username"/>
                                        <CustomInput  type="email" 
                                                      handleText={(text)=>setEmail(text)}
                                                      placeholder="Email Address"/>
                                         <CustomInput  
                                                      type="Phone"
                                                      handleText={(text)=>setMobile(text)}
                                                      placeholder="Mobile Number"/>
                                  
                                        <CustomInput  type="password" 
                                                      handleText={(text)=>setPassword(text)}
                                                      placeholder="Password"/>
                                         <CustomInput  type="password" 
                                                      handleText={(text)=>setCPassword(text)}
                                                      placeholder="Confirm Password"/>
                                                     
                                  
                                   <CustomButton  type="Primary" 
                                                  buttonText="Sign Ups" 
                                                  handleButtonPress={handleSignUp}/>
                                  
                             
                             
                             
                             
                             
                             <View>
                          
                                      
                                      
                                      
                                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                          <View style={{flex: 1, height: 1, borderStyle:"dashed",borderWidth:1}} />
                                            <View>
                                              <Text style={{textAlign: 'center', paddingHorizontal:13}}>or SignUp with </Text>
                                            </View>
                                                    <View style={{flex: 1, height: 1, borderStyle:"dashed",borderWidth:1}} />
                                          </View>
                                      </View>
                                      

                       
                       
                       
                                   <CustomButton  type="Secondary" 
                                                  buttonText="Sign Up With Google" 
                                                  handleButtonPress={handleButtonPress} 
                                                  icon={require('../../assets/images/google.png')}/>
                                                 
                          
                          <Text style={responsivestyleforsignup.createNew} onPress={HandlerGoToSignUp}>Go To Logins</Text>
                        
                                    
                                   
                          
                          </ScrollView>

                         
      
      </View>
                                    
                              
          
    );
  }



  // handleButtonPress={handleSignUp} 


  
 
  

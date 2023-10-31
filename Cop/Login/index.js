import React, {useContext,useState}from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import{styles} from '../Login/style'
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import colors from '../components/common/colors';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore'
import { validateEmail } from '../components/common/validation';
import { DimensionsContext, Dimensioncontext } from '../context/index'; 


export default function SignUp() {
  

  const dimensions=Dimensioncontext()
  console.log("dimensions1",dimensions)
 

  const [email, setEmail] = useState("")
  const [fipasswordrst, setPassword] = useState("")
const navigation = useNavigation()
    
const responsivestyle =styles(dimensions.windowWidth,dimensions.windowHeight)

const handleButtonPress=()=>{
     navigation.navigate("LoginPhone")
    }

  


    const HandlerGoToLogin=()=>{
     navigation.navigate("Login")
    
    }

    
    
    
    const handleLogin=async()=>{
      if(email.trim()!=="" && fipasswordrst.trim()!==""){
        if(validateEmail(email.trim())){
          await firestore()
          .collection("Users")
          .where("email","==",email.trim())
          .get()
          .then(async snapshot=>{
              if(snapshot.empty){
                        Snackbar.show({
                          text: 'This user is not registered with us ,try creating a new one',
                          duration: Snackbar.LENGTH_SHORT,
                          backgroundColor:"red",
                          textColorcolor:colors.white
                            });
                  }else{
                          snapshot.forEach(documentSnapshot => {
                            if(fipasswordrst.trim()===documentSnapshot.data().password){
                              navigation.navigate("AppDrawer")
                            }else{
                              Snackbar.show({
                                text: 'The password you entered was wrong',
                                duration: Snackbar.LENGTH_SHORT,
                                backgroundColor:"red",
                                textColorcolor:colors.white
                                  })
                                    }
                                });;
                                                                
                         }
                  })
                  .catch(err=>console.warn(err))
        }else{
          Snackbar.show({
            text: 'Enter a valid email',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:"red",
            textColorcolor:colors.white
              });
        }

                                                          
                  
                          
                                                        }else{
                                                                  Snackbar.show({
                                                                    text: 'Fill up all fields',
                                                                    duration: Snackbar.LENGTH_SHORT,
                                                                    backgroundColor:"red",
                                                                    textColorcolor:colors.white
                                                                      });
                                                                }
                                                              }
 
       
       
                                                 
       
                                    
       

   
    return (
      <View style={{height:"100%",backgroundColor:"yellow"}}>
              
              <Image  style={responsivestyle.topBg}
                      source={require('../../assets/images/images.jpeg')}/>
              
                          <ScrollView style={responsivestyle.ScrollView}>
                            
                          <Image style={responsivestyle.logo}
                                           source={require('../../assets/images/images-2.jpeg')}/> 
                                     
                                        <Text style={responsivestyle.loginText}>Login Account</Text>
                                        
                                        <CustomInput  type="email" 
                                                      handleText={(text)=>setEmail(text)}
                                                      placeholder="Email"/>
                                  
                                        <CustomInput  type="password" 
                                                      handleText={(text)=>setPassword(text)}
                                                      placeholder="Password"/>
                                                     
                                   <CustomButton  type="Primary" 
                                                  buttonText="Sign In" 
                                                  handleButtonPress={handleLogin}
                                               />
                          
                          <Text style={responsivestyle.createNew} onPress={HandlerGoToLogin}>If you are new, Create here</Text>
                          <View>
                          
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1, height: 1, borderStyle:"dashed",borderWidth:1}} />
  <View>
    <Text style={{textAlign: 'center', paddingHorizontal:13}}>or Login with </Text>
  </View>
  <View style={{flex: 1, height: 1, borderStyle:"dashed",borderWidth:1}} />
</View>
                          </View>
                                    
                                    <CustomButton type="Secondary" 
                                                  buttonText="Sign In With Phone" 
                                                  handleButtonPress={handleButtonPress} 
                                                  icon={require('../../assets/images/smartphone.png')}
                                                 />
                                    
                                    <CustomButton type="Secondary" 
                                                  buttonText="Sign In With Email" 
                                                  
                                                  icon={require('../../assets/images/google.png')}/>
                          
                          </ScrollView>

                          <View style={responsivestyle.footer}>
                            <Text style={responsivestyle.footerText}>Login as a Guest</Text>
                          </View>
                          
      
      </View>
                                    
                              
          
    );
  }





// import { View, Text } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View>
//       <Text>jerrinxs</Text>
//     </View>
//   )
// }

// export default index











import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Splash from '../Screens/Splash'
import Signuptext from './signuptext'
import { useNavigation } from '@react-navigation/native'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import firestore from '@react-native-firebase/firestore';
import {validateEmail} from '../../components/common/Validation'
import { MobileNumberValidation } from '../../components/common/Validation'
import Snackbar from 'react-native-snackbar';


const SignUpEmpty = (props) => {
    
    const [email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [error, setfisetError] = useState(null)


    const navigation = useNavigation()

    const SignUpHandler=async()=>{
        if(email.trim()!=="" && PhoneNumber.trim()!=="" && password.trim()!==""){
            
            
            
            
            if(validateEmail(email.trim())){
             
                        if(MobileNumberValidation(PhoneNumber.trim())){
                            console.log("jack")
 await firestore()
            .collection('Users')
            .where("email","==",email.trim())
            .where("phonenumber","==",PhoneNumber.trim())
            .get()
            .then(async snapshot=>{
                if(snapshot.empty){

                    const userData={
                        email:email.trim(),
                        phonenumber:PhoneNumber.trim(),
                        password:password.trim()
                    }
                    await firestore()
                    .collection("Users")
                    .add(userData)
                    .then(resp=>{
                        console.warn(resp)
                        Snackbar.show({
                            text: "A New User Account Is Created",
                            duration: Snackbar.LENGTH_SHORT,
                            textColor: 'White',
                           
                            backgroundColor:"red"
                          });
                    })
                    .catch(err=>{
                        console.warn(err)
                    })
                 
                
                
                
                    setfisetError("")
                
                }else{
                    
                    Snackbar.show({
                        text: "This Email is already exist, use another email",
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: 'White',
                       
                        backgroundColor:"red"
                      });
                    
                    }
            })
            
            
        }else{
            setfisetError("Phone number is not valid")
        }
        
        
        }else{
        setfisetError("Email is not valid")
        }
                    
    }else{
        setfisetError("Fill up all fields")
    }
                                
}
                    
           
            

    
    return (
        <SafeAreaView style={{backgroundColor:"white",flex:1,marginTop:-10}}>
              
                            <Splash/>
                         

                
                <Signuptext hello="Signup" />
                <View style={{marginLeft:20,marginTop:-10}}> 
            

                <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
                <Text style={{fontSize:17}}>Duis mollis,est non commodo luctus, nisierat.</Text>
</View>



<CustomInput placeholder="Email" onChangeText={(text)=>setEmail(text)} type="Email"/>



<CustomInput placeholder="Phone Number" onChangeText={(text)=>setPhoneNumber(text)} type="Phone Number"/>



<CustomInput placeholder="Password" onChangeText={(text)=>setPassword(text)} type="Password"/>


{error!==null?( <View style={{marginTop:-20}}>
    <Text style={{color:"red",fontSize:15,marginLeft:20}}>{error}</Text>
</View>):null}

<CustomButton name="SignUp" onPress={SignUpHandler}/>


<View  style={{alignItems:"center",marginTop:0}}>

<Text style={{fontSize:20,fontFamily:"Nunito-ExtraBold"}}>Already have an account ?</Text>
</View>

<TouchableOpacity style={{flex:1,marginTop:30}} onPress={()=>navigation.navigate("LoginFill")}>

      <Text style={{backgroundColor:"#03AE1C",padding:20,color:"white",textAlign:"center",fontFamily:"Fuzzy-Bubbles-Bold",fontSize:18}}>Logins</Text>
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignUpEmpty

                    
                    
           
            


            
            
            
            

                            
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        



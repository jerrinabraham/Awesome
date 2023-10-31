


import { View, Text, TextInput,secureTextEntry, KeyboardAvoidingView } from 'react-native'
import React,{useEffect, useState} from 'react'
import Splash from '../Splash'
import Signuptext from '../../SignUpEmpty/signuptext'
import Buttons from '../Button'
import DownButton from '../DownButton'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../SignUpEmpty/CustomInput'
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
const LoginFill = ({route}) => {
    // useEffect(()=>{
    //     setPassword("")
    // },[route.params.passowrdTexthide])

 

    const [MobileNumber, setMobileNumber] = useState("")
    const [Password, setPassword] = useState("")
    const navigation = useNavigation()

    // if(route.params.passowrdTexthide){
    //     setPassword("")
    // }
    const signinHandler=async()=>{
        if(MobileNumber.trim()!=="" && Password.trim()!==""){
            await firestore()
            .collection('Users')
            .where("phonenumber","==",MobileNumber.trim())
            .where("password","==",Password.trim())
            .get()
            .then(async snapshot=>{
                if(snapshot.empty){

                    Snackbar.show({
                        text: "This user is not registered with us",
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: 'White',
                    
                        backgroundColor:"red"
                    });
                
                  
                
                
                
                
                
                }else{
                    setPassword("")
                    navigation.navigate("SuccessfullyLoged")
                }
          
        })  .catch(err=>{
            console.warn(err)
        })
                      
        console.log("entered if statement")
        
        
        
        
        } 
        else{
                    
            Snackbar.show({
                text: "fill up all fields",
                duration: Snackbar.LENGTH_SHORT,
                textColor: 'White',
            
                backgroundColor:"red"
            });
            
            }
    }
       
        
        // navigation.navigate("SuccessfullyLoged")
    
    return (
        <View style={{backgroundColor:"white",flex:1}} >


    
                <Splash/>
                <Signuptext hello="Welcome Back!"/>
                <View style={{marginLeft:20}}> 
            

                <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
                <Text style={{fontSize:17}}>nibh, ut fermentum massa justo sit amet risus</Text>
                <Text style={{fontSize:17}}>Duis mollis,est non commodo luctus, nisierat.</Text>
                <Text style={{fontSize:17}}>porttitor ligula</Text>
</View>

<CustomInput  placeholder='Mobile number' onChangeText={(text)=>setMobileNumber(text)}/>
{/* <View style={{marginLeft:20,marginRight:20,marginVertical:20}}> 
    <TextInput placeholder='Mobile number'  style={{backgroundColor:"#EFF1EF"}}/>
</View> */}

<CustomInput  placeholder='Password' onChangeText={(text)=>setPassword(text)} secureTextEntry={true} value={Password}/>
{/* <View style={{marginLeft:20,marginRight:20,marginVertical:20}}> 
    <TextInput placeholder='Password' style={{backgroundColor:"#EFF1EF"}}/>
</View> */}

<View style={{alignItems:"flex-end",marginRight:10}}>
    <Text style={{fontSize:18}}>Forgot Password? </Text>
</View>

<Buttons name="Login" onPress={signinHandler}/>

<View  style={{alignItems:"center"}}>

<Text style={{fontSize:20,fontFamily:"Nunito-ExtraBold"}}>Need an account ?</Text>

</View>

<DownButton jack="Signups" onPress={()=>navigation.navigate("SignUpEmpty")}/>

        </View>
        
  )
}




















export default LoginFill
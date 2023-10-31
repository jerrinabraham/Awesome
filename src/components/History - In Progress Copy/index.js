import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Signuptext from '../SignUpEmpty/signuptext'
import Splash from '../Screens/Splash'
// import Replicate from '../BookForWashing/replicate'
// import Buttons from '../Screens/Button'

const index = () => {
  return (
    <View style={{backgroundColor:"white",flex:1}}>
        
            <View style={{alignItems:"flex-end",flexDirection:"row",justifyContent:"space-between"}}> 
                <Signuptext hello="History"/>
                <Image  source={require('../../../assets/images/bell.png')} style={{width:72,height:40,marginVertical:20}}/>
            </View>

                    <View style={{marginLeft:20}}> 
                        <Text style={{fontSize:17}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                        <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum.</Text>
                    </View>


                    
                    
                    
                    
                    
                    
                    <View style={{marginLeft:20,marginTop:40,flexDirection:"row",marginRight:20}}>
                                
                                <TouchableOpacity>
                                    <Text style={{backgroundColor:"white",height:50,width:120,color:'#1AC839',textAlign:"center",textAlignVertical:"center",borderColor:"#1AC839",borderWidth:1,fontSize:22}}>All</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={{backgroundColor:"white",height:50,width:120,color:"#1AC839",textAlign:"center",textAlignVertical:"center",borderColor:"#1AC839",borderWidth:1,fontSize:22}}>In Progress</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={{backgroundColor:'#1AC839',height:50,width:120,color:"white",textAlign:"center",textAlignVertical:"center",borderColor:"#1AC839",borderWidth:1,fontSize:22}}>Delivered</Text>
                                </TouchableOpacity>

                    </View>


                    <View style={{marginLeft:20,marginTop:40,marginRight:20}}>
<Text style={{fontSize:17}}>11th June 2018, 03:30 PM</Text>

<View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
    <Text style={{fontSize:17,color:"black",fontWeight:"bold"}}>3 Quantity</Text>
    <Text style={{fontSize:17,color:'#1AC839',fontWeight:"bold"}}>Delivered</Text>
</View>
</View>
<View style={{marginLeft:20,marginTop:40,flexDirection:"row",marginRight:20}}>
    <Text style={{fontSize:17,color:"black",fontWeight:"bold"}}>Total</Text>
    <Text style={{fontSize:17,color:"black",fontWeight:"bold"}}>   1500</Text>
</View>


                    

                  
        
    </View>
    

  )
}

export default index











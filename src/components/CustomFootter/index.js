import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React,{useState} from 'react'
// import colors from '../colors'
import { useNavigation } from '@react-navigation/native'
// import {styles} from './styles'
// import { DimensionsContext, Dimensioncontext } from '../../../context/index'; 
const CustomFotter = ({state,descriptors,routes,navigation}) => {
      // const navigation = useNavigation()
    const [first, setfirst] = useState(null)
    const [second, setfsetSecondirst] = useState(null)
    const [third, setThird] = useState(null)
    const [fourth, setFourth] = useState(null)


  const firstpressedHanlder =()=>{
    setfirst('rgba(26,239, 69, 0.2)')
    setfsetSecondirst(null)
    setThird(null)
    setFourth(null)
    navigation.navigate("Homes")
    console.log("pressed")
  
  }
  const secondpressedHandler =()=>{
      setfirst(null)
      setfsetSecondirst('rgba(26,239, 69, 0.2)')
      setThird(null)
      setFourth(null)
      navigation.navigate("BookForWashing")
      console.log("pressed")
    
    }
    const thirdpressedHandler =()=>{
      setfirst(null)
      setfsetSecondirst(null)
      setThird('rgba(26,239, 69, 0.2)')
      setFourth(null)
      navigation.navigate("HistoryYetToPay")
      console.log("pressed")
    
    }
    const fourthpressedHandler =()=>{
      setfirst(null)
      setfsetSecondirst(null)
      setThird(null)
      setFourth('rgba(26,239, 69, 0.2)')
      navigation.navigate("More")
      console.log("pressed")
    
    }

   
return(<View>
  <ImageBackground source={require('../../../assets/images/FooterImage.png')} style={{width:"100%",height:45}}>
  
  <View style={{flexDirection:"row"}}>

          <TouchableOpacity style={{marginLeft:5}} onPress={firstpressedHanlder}>
            
              <Text style={{backgroundColor:'rgba(250,252, 251, 0.2)',width:50,height:50,borderRadius:25}}></Text>
        </TouchableOpacity>



        <TouchableOpacity style={{marginLeft:68}} onPress={secondpressedHandler}>
        <Text style={{backgroundColor:second,width:50,height:50,borderRadius:25}}></Text>
        </TouchableOpacity>

        

        <TouchableOpacity style={{marginLeft:68}} onPress={thirdpressedHandler}>
              <Text style={{backgroundColor:third,width:50,height:50,borderRadius:25}}></Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={{marginLeft:68}} onPress={fourthpressedHandler}>
              <Text style={{backgroundColor:fourth,width:50,height:50,borderRadius:25}}></Text>
        </TouchableOpacity> 











  </View>
  </ImageBackground>
</View>)
}

export default CustomFotter
import { View, Text,Image, ImageBackground } from 'react-native'
import React from 'react'
import Splash from '../Splash'

const initialSlider = () => {
  return (
    <View>
    <View>
      
        <Image source={require("../../../../assets/images/initialsliders.png")} style={{width:"100%",height:"70%",resizeMode:"stretch"}}>
        
        
        </Image>
        <View style={{marginVertical:-50}} >
        <Splash/>
        </View>
       
     
       
                 

    </View>
       <View style={{marginLeft:20,marginVertical:-50}}> 
                    

       <Text style={{fontSize:17}}>Cras mattis consectetur purus sit amet</Text>
       <Text style={{fontSize:17}}>fermentum. Vivamus sagittis lacus vel augue</Text>
       <Text style={{fontSize:17}}>laoreet rutrum faucibus dolor auctor. Maeceanas</Text>
       <Text style={{fontSize:14}}>faucibus mollis interdum. Lorem ipsum dolor sit Curabitur.</Text>
       <Text style={{fontSize:17}}>amet, consectetur adipiscing elit. Curabitur</Text>
       <Text style={{fontSize:17}}>blandit tempus porttitor.Lorem ipsum dolor sit</Text>
       <Text style={{fontSize:17}}>amet,consectetur adipiscing elit</Text>
</View>

<View style={{alignItems:"flex-end",marginRight:15,marginVertical:60}}>
                        <Text style={{color:"#8CFA9C",fontSize:25}}>Next</Text>
                    </View>
</View>
  )

}

export default initialSlider
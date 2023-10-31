import { View, Text,StyleSheet, TextInput, Image, TouchableOpacity,Modal } from 'react-native'
import React from 'react'
import Splash from '../Screens/Splash'
import Buttons from '../Screens/Button'

const AcceptingAgreement = () => {
  return (
<View style={{marginVertical:20,backgroundColor:"white",flex:1}}>
    
                    <View style={{padding:20}}>
                        <Text style={styles.text}>Update your resident</Text>
                        <Text style={styles.text}>and continue</Text>
                        <Text style={{fontSize:17,marginVertical:5}}>Donec sed odio dui. Fusce dapibus, tellus ac</Text>
                            <Text style={{fontSize:17}}>cursus commodo,tortor mauris condimentum</Text>
                            <View style={{marginVertical:40}}>
            <TextInput placeholder='Address' style={{backgroundColor:"#E6E6E6",height:200}}/>
        </View>
        <TouchableOpacity style={{marginTop:-35,marginHorizontal:122}}>
           <Image source={require('../../../assets/images/map.png')} style={{width:245,height:38}}/>
        </TouchableOpacity>
        <View style={{flexDirection:"row",marginVertical:20,}}>
            <TextInput style={{width:20,borderRadius:3,borderWidth:1,height:20}}/>
        

        <Text style={{marginLeft:15}}>Accepted Terms & Conditions</Text>
        </View>
       <Buttons name="Continue"/>
                    </View>
                    <View >
                        <Text style={{textAlign:"center",color:"lightgreen"}}>Terms and Conditions</Text>
                    </View>
       
</View>

  )
}

export default AcceptingAgreement


const styles=StyleSheet.create({
    text:{
     
     fontFamily:"Fuzzy-Bubbles-Bold",
     fontWeight:"bold",
     color:"black",
     
      fontSize:30
    }
  })



// const AcceptingAgreement = ({ isVisible, onClose }) => {
//     return (
//       <Modal isVisible={isVisible}>
//         <View style={styles.dialogContainer}>
//           <Icon name="check-circle" size={50} color="green" />
//           <Text style={styles.messageText}>Success!</Text>
//           <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     );
//   };
  
//   const styles = {
//     dialogContainer: {
//       backgroundColor: 'white',
//       borderRadius: 8,
//       padding: 16,
//       alignItems: 'center',
//     },
//     messageText: {
//       fontSize: 20,
//       marginTop: 10,
//     },
//     closeButton: {
//       backgroundColor: 'blue',
//       padding: 10,
//       borderRadius: 5,
//       marginTop: 20,
//     },
//     closeButtonText: {
//       color: 'white',
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//   };
  
//   export default AcceptingAgreement;
  
import { View, Text, Image, TextInput, TouchableOpacity, FlatList,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Signuptext from '../SignUpEmpty/signuptext'
import Splash from '../Screens/Splash'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';



// import Replicate from '../BookForWashing/replicate'
// import Buttons from '../Screens/Button'

const HistoryAll = () => {
    const navigation = useNavigation()
    const [inputTextValue, setInputTextValue] = useState(null);
    const [list, setList] = useState([]);
    const [isUpdateData, setIsUpdateData] = useState(false);
    const [cardId, setCardid] = useState(null);

    useEffect(() => {
        getDatabase()
    },[])


    const handleUpdateData = async () => {
        try {
          if (inputTextValue.length > 0) {
    
            await firestore().collection('Users').doc(cardId).update({
              text: inputTextValue
            })
    
            setInputTextValue('');
            setIsUpdateData(false)
    
            // const response = await database()
            //   .ref(`todo/${selectedCardIndex}`)
            //   .update({
            //     value: inputTextValue,
            //   });
    
            // console.log(response);
            // setInputTextValue('');
            // setIsUpdateData(false);
          } else {
            alert('Please Enter Value & Then Try Again');
          }
        } catch (err) {
          console.log(err);
        }
      };
    


    const handleCardPress = (cardId, cardValue) => {
        try {
          setIsUpdateData(true);
          setCardid(cardId);
          setInputTextValue(cardValue);
        } catch (err) {
          console.log(err);
        }
      };

      const handleCardLongPress = (cardId ) => {
        try {
          Alert.alert('Alert', `Are You Sure To Delete?`, [
            {
              text: 'Cancel',
              onPress: () => {
                console.log('Cancel Is Press');
              },
            },
            {
              text: 'Ok',
              onPress: async () => {
                try {
    
                  await firestore().collection('Users').doc(cardId).delete();
                  setInputTextValue('');
                  setIsUpdateData(false);
    
                  // const response = await database()
                  //   .ref(`todo/${cardIndex}`)
                  //   .remove();
    
    
                } catch (err) {
                  console.log(err);
                }
              },
            },
          ]);
    
          // setIsUpdateData(true);
          // setCardid(cardIndex);
          // setInputTextValue(cardValue);
        } catch (err) {
          console.log(err);
        }
      };
    
    

    const getDatabase = async () => {
        try {
    
          firestore().collection('Users')
          .onSnapshot((snap) => {
            console.log("snap",snap)
            const tempArray = []
            snap.forEach((item) => {
              console.log("items",item.data())
           
              tempArray.push({
                ...item.data(),
                id:item.id
              });
            })
    
            setList(tempArray)
          })
    
         
        } catch (err) {
          console.log(err);
        }
      };
  
  
  
  
  
  
  
  
  
  
  
  console.log("list",list.froms)
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
                                    <Text style={{backgroundColor:'#1AC839',height:50,width:120,color:"white",textAlign:"center",textAlignVertical:"center",borderColor:"#1AC839",borderWidth:1,fontSize:22}}>All</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={{backgroundColor:'white',height:50,width:120,color:"#1AC839",textAlign:"center",textAlignVertical:"center",borderColor:"#1AC839",borderWidth:1,fontSize:22}}>In Progress</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={{backgroundColor:'white',height:50,width:120,color:"#1AC839",textAlign:"center",textAlignVertical:"center",borderColor:"#1AC839",borderWidth:1,fontSize:22}}>Delivered</Text>
                                </TouchableOpacity>

                    </View>



                    <FlatList
                            data={list}
                            renderItem={({item,index})=>{
                                console.log("jerrin",item.id)
                                return( <View style={{marginLeft:20,marginTop:40,marginRight:20}}
                                    >
                                    <Text style={{fontSize:17,color:"red"}}>{item.froms}, {item.whens}</Text>
                                    
                                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,alignItems:"center"}}>
                                        <Text style={{fontSize:17,color:"black",fontWeight:"bold"}}>{item.quantitys} Quantity</Text>
                                        <TouchableOpacity onPress={()=>navigation.navigate("BookForWashingssss",{cardId:item.id,when:item.whens,from:item.froms,quantity:item.quantitys})}><Text style={{fontWeight:"bold",color:"blue"}}>Edit</Text></TouchableOpacity>
                                        <Text style={{fontSize:17,color:"grey",fontWeight:"bold"}}>Yet to pickup</Text>
                                        <TouchableOpacity onPress={() =>handleCardLongPress(item.id)}>
                                      
                                        <Image source={require("../../../assets/images/bin.png")}style={{width:30,height:25}}/>
                                          </TouchableOpacity>
                                      

                                    </View>
                                    
                        </View>)
                            }}
                            /> 
                           <TouchableOpacity style={{alignItems:"center",margin:50,backgroundColor:"red",padding:20,borderRadius:20}} onPress={()=>navigation.navigate("HistoryYetToPay")}>
                                      <Text style={{color:"white",fontSize:18}}>continue</Text>
                                    </TouchableOpacity>

                  
                                
                                
                                
                                
                             
                                
                                    
                                   

                       
                       
                        
                        
                  
        
    </View>
    

  )
}

export default HistoryAll
                                
                             








                              





                                      
                      
                        
                               









                                      
                      
                        
                               
                      







                       
                       
                    

            
            
                        
               
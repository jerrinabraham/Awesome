import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import firestore from '@react-native-firebase/firestore'
const index = () => {

  const [first, setFirstText] = useState("")
  const [second, setSecondText] = useState("")
  const [show, setShow] = useState(false)
  const [editTextInput, SeteditTextInput] = useState("")
  const [cardID, SetCardID] = useState(null)
  const [slection, setSelection] = useState()


  const [TextADD,setTextAdd ] = useState([])
  const [list,setList ] = useState([])
  
  

  useEffect(()=>{
    getData()
  },[])

  const AddHandler=async()=>{
    // setTextAdd([...TextADD,first,second])

    try{
      await firestore()
      .collection("Jerrin")
      
      .add(
        {
          name:first,
        age:second
      })
      // setFirstText("")
      // setSecondText("")
      setFirstText("")
      setSecondText("")
    
    
    
    }catch{
      console.log(err)
    }
  }


  const getData=()=>{
    try{
      firestore()
      .collection("Jerrin")
      .onSnapshot((snap)=>{
        const tempArray =[]
        snap.forEach((item)=>{
          tempArray.push({
            ...item.data(),
            id:item.id
          })
        })
       setList(tempArray)
      })
    }
    catch{
      console.log("items",item.data())
    }
  }

 

  const updateHandler=async(id)=>{
   

    try{
      console.log("first",first)
       await firestore()
       .collection("Jerrin")
       .doc(id)
       .update({
        name:first,
        age:second
       })
      
    }
    catch{

    }
 
    setShow(false)
  }

  const DeleteHandler=async(id)=>{
    try{
       await firestore()
       .collection("Jerrin")
       .doc(id)
      .delete()
    }
    catch{

    }
  }

  const cardHandler=(id,cardValue,cardAge)=>{
    console.log("id",id)
    
   
    // setSelection(cardValue)
setSecondText(cardAge)
  setFirstText(cardAge)
   
   

    SetCardID(id)
    setShow(true)

  }


  
  return(
    <View style={{flex:1,backgroundColor:"grey",}}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <TextInput value={first} style={{borderColor:"red",borderWidth:1,width:"75%",backgroundColor:"white"}}
            onChangeText={(text)=>setFirstText(text)}/>
            { !show? <Button title="Add" onPress={AddHandler}/>:  
            <Button title="Update" onPress={()=>{updateHandler(cardID)}}/>}
           
          
            
        </View>
        <TextInput value={second} style={{borderColor:"red",borderWidth:1,width:"75%",backgroundColor:"white"}}
            onChangeText={(text)=>setSecondText(text)}/>



    {/* <FlatList data={TextADD}
    renderItem={({item})=>{
      console.log("pakkil",item)
      return(<TouchableOpacity onPress={()=>{}}>
        <Text>{item}</Text>
      </TouchableOpacity>)
    }}/> */}


    <View>
      <TextInput placeholder='Edit Text Box' onChangeText={(text)=>SeteditTextInput(text)}/>
    <FlatList data={list}
    renderItem={({item})=>{
      return(<View style={{justifyContent:"space-around"}}>
      
     
      

      <TouchableOpacity onPress={()=>cardHandler(item.id,item.name,item.age)}><Text style={{color:"white"}} >{item.name}</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>cardHandler(item.id,item.name,item.age)}><Text style={{color:"white"}} >{item.age}</Text></TouchableOpacity>


        
        <TouchableOpacity onPress={()=>DeleteHandler(item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>)
    }}/> 
    </View>
    </View>

  )
}



//console.log("Items123",item)}


export default index


{/* <TouchableOpacity onPress={()=>cardHandler(item.id,item.name,item.age)}>

<Text style={{color:"white"}} >{item.name}</Text>
<Text style={{color:"white"}} >{item.age}</Text>
</TouchableOpacity> */}















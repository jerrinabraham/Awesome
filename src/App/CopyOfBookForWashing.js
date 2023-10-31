import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';



  export default function Appy(){
    const [selectedStartDate, setfirst] = useState(null)
    const [fire,setFire] = useState(false)

  

  const onDateChange=(date)=> {
   
    setfirst(date)
  }

  const Handler=()=>{
  setFire(true)
}

 
    
    
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View>
                <View style={{borderColor:"red",margin:25,padding:10,borderWidth:1}}>
                <TextInput placeholder='Date'  onChange={Handler} value={startDate}/>
          </View>


          {fire?<View style={styles.container}>
        <CalendarPicker
          
          onDateChange={(date)=>onDateChange(date)}
          selectedDayTextColor="white"
          todayBackgroundColor="green"
        />

        
      </View>
          :null}


       






      </View>
     
    );
  }





const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#FFFFFF',
   
  },
});








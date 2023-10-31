import * as React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpEmpty from '../SignUpEmpty/index';















import SignUpFill from '../../components/Screens/SiignupFill/index'

import LoginFill from '../Screens/LoginFill';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SuccessfullyLoged from '../Screens/SuccessfullyLoged';

import MapScreen from '../Screens/MapScreen.js/index';

import CustomFotter from '../CustomFootter';

import Homes from '../Home (services)/Homes';

import BookForWashing from '../BookForWashing';

import HistoryYetToPay from '../History - All detailed page Yet to pay.';

import More from '../More/More';
import BookforWashingDatepicker from '../Book for Washing  Date picker';
import HistoryAll from '../History-All';
import BookForWashingssss from '../BookForWashingEdit/index';

const footer = createBottomTabNavigator()




function AppFooter(){
  return(
      <footer.Navigator screenOptions={{headerShown:false}} 
                  tabBar={props=><CustomFotter {...props}/>}  >
     <footer.Screen name="Homes" component={Homes}></footer.Screen>
     <footer.Screen name="BookForWashing" component={BookForWashing}></footer.Screen>

     <footer.Screen name="BookForWashingssss" component={BookForWashingssss}></footer.Screen>
     

     <footer.Screen name="HistoryYetToPay" component={HistoryYetToPay}></footer.Screen>
     <footer.Screen name="HistoryAll" component={HistoryAll}></footer.Screen>
     <footer.Screen name="More" component={More}></footer.Screen>
      </footer.Navigator>  
      
        )  
      }
   
     


const Stack = createNativeStackNavigator();

function Jerrin() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='AppFooter'>
    
        <Stack.Screen name="SignUpEmpty" component={SignUpEmpty} />
        <Stack.Screen name="SignUpFill" component={SignUpFill} />
        <Stack.Screen name="LoginFill" component={LoginFill} />
        <Stack.Screen name="SuccessfullyLoged" component={SuccessfullyLoged} />
        <Stack.Screen name="BookforWashingDatepicker" component={BookforWashingDatepicker} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="AppFooter" component={AppFooter} /> 
      
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Jerrin;




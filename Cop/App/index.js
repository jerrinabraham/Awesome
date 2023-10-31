

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../../SignUp/Login';

import SignUp from '../../Login/index';
import LoginPhone from '../LoginPhone/index'

import Home from '../../Home/index'
import { DimensionsContextProvider } from '../../context';
import 'react-native-gesture-handler';
import categories from '../categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../cart';
import CustomDrawer from '../../components/CustomDrawer';
import CustomFotter from '../../components/common/customFooter';
import Categories from '../categories';
import Search from '../Search'
import Offers from '../Offers'
import Orders from '../Orders/index'
import Wishlist from '../wishlist/index';
import Account from '../Accounts/index';





const AppStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function AppDrawer(){
     return(
<Drawer.Navigator screenOptions={{headerShown:false}} initialRouteName='Myfooter' drawerContent={props=><CustomDrawer {...props}/>}>
<Drawer.Screen name="Myfooter" component={AppFooter}></Drawer.Screen>
        <Drawer.Screen name="categories" component={categories}></Drawer.Screen>
        <Drawer.Screen name="Cart" component={Cart}></Drawer.Screen>
        <Drawer.Screen name="Orders" component={Orders}></Drawer.Screen>
        <Drawer.Screen name="Wishlist" component={Wishlist}></Drawer.Screen>
        <Drawer.Screen name="Account" component={Account}></Drawer.Screen>
</Drawer.Navigator>  
     )  
}

const footer = createBottomTabNavigator()

function AppFooter(){
  return(
<footer.Navigator screenOptions={{headerShown:false}} tabBar={props=><CustomFotter {...props}/>}>
     <footer.Screen name="Home" component={Home}></footer.Screen>
     <footer.Screen name="Categories" component={Categories}></footer.Screen>
     <footer.Screen name="Search" component={Search}></footer.Screen>
     <footer.Screen name="Offers" component={Offers}></footer.Screen>
     <footer.Screen name="Cart" component={Cart}></footer.Screen>
     
</footer.Navigator>  

  )  
}











function App() {
 
  return (

       
 
    <DimensionsContextProvider>
       
    <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
            
            
          
  
                   <AppStack.Screen name="SignUp" component={SignUp} />
                    
                <AppStack.Screen name="Login" component={Login} /> 
                    <AppStack.Screen name="LoginPhone" component={LoginPhone} /> 
                     <AppStack.Screen name="AppDrawer" component={AppDrawer}/> 
                     
            </AppStack.Navigator>
    
    </NavigationContainer> 

</DimensionsContextProvider>
                  

        

                


    
  );
}



export default App;


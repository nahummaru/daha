import React, {useLayoutEffect} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Daha from '../screens/DahaScreen';
import Dawa from '../screens/DawaScreen';


const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {

  return (
    <Tab.Navigator screenOptions= {( {route}) => ({
      headerShown: true,
      tabBarInactiveTintColor: "gray",

      tabBarLabelStyle: {
        fontSize: 17,
        fontWeight: "bold",
      },
      tabBarStyle: {
        borderLeftColor: "black", 
        backgroundColor: "#F6F7FB"

        
      }, 
      tabBarIndicatorStyle: {
        backgroundColor: "#a5353a"
      }
    })}>
      <Tab.Screen name="DAHA" component={Daha}/>
      <Tab.Screen name="DAWA" component={Dawa} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator

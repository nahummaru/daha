import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, TouchableOpacity } from 'react-native'

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import Post from '../screens/PostScreen';
import MessagesStack from './MessageStack';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  const navigation = useNavigation();

  // these props define the top header of each screen from the bottom navigator
  return (
    <Tab.Navigator screenOptions={{
      tabBarOptions: {
        showIcon: true
      },
      headerStyle: {
        backgroundColor: "#a5353a",
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
      },
      tabBarActiveBackgroundColor: "#a5353a",
      tabBarInactiveBackgroundColor: "#a5353a",
      tabBarActiveTintColor: "white",

      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 78,
        backgroundColor: "#a5353a"
      }
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ }) => (
            <Icon name="home" size={20} color="white" />
          )
        }} />
      <Tab.Screen name="Messages" component={MessagesStack}
        options={{
          tabBarIcon: ({ }) => (
            <Icon name="home" size={20} color="white" />
          )
        }}
      />
      <Tab.Screen name="PostScreen" component={PostScreen} options={({ navigation }) => ({
        tabBarButton: (props) => (

          <TouchableOpacity onPress={() => navigation.navigate(PostScreen)}
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
              backgroundColor: '#fff',
              borderRadius: 50,
            }}
          >
            <Icon name={"plus"} size={35} color="#a5353a" />
          </TouchableOpacity>
        ),
      })} />
      <Tab.Screen name="History" component={HistoryScreen}
        options={{
          tabBarIcon: ({ }) => (
            <Icon name="home" size={20} color="white" />
          )
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({ }) => (
            <Icon name="home" size={20} color="white" />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator

import { React, useLayoutEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostModal from '../screens/AddingPosts/PostModal';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';



const Stack = createStackNavigator();
const auth = getAuth();


const ProfileStack = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons>
          <TouchableOpacity style={{ marginRight: 15 }}
            onPress={() => { navigation.navigate("Settings") }} >
            <AntDesign name="setting" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            marginRight: 15
          }}
            onPress={signOutFunction}
          >
            <AntDesign name="logout" size={24} color="white" />
          </TouchableOpacity>
        </HeaderButtons>
      ),
    })
  }, [])

  const signOutFunction = () => {
    signOut(auth).then(() => {
      navigation.replace('Login')
    }).catch((error) => {
      //an error happened
    });
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='Login' component={Login} />

      
    </Stack.Navigator>
  );
}

export default ProfileStack

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenericProfileTopTabNavigator from "./GenericProfileTopTabNavigator";
import GenericProfileScreen from "../components/GenericProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";


const Stack = createNativeStackNavigator();

const FeedStack = ({}) => {
  console.log('bruhhh')
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default FeedStack;

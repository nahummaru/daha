import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenericProfileTopTabNavigator from "./GenericProfileTopTabNavigator";
import GenericProfileScreen from "../components/GenericProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import HomeScreen from "../screens/HomeScreen";
import DawaCard from "../components/DawaCard";
import DawaDescriptionScreen from "../screens/DawaDescriptionScreen";


const Stack = createNativeStackNavigator();

const FeedStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DawaDescription" component={DawaDescriptionScreen} />
      <Stack.Screen name="UsersProfileScreen" component={GenericProfileScreen} />

    </Stack.Navigator>
  );
};

export default FeedStack;

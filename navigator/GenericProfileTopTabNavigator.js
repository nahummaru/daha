import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();

const GenericProfileTopTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 17,
          fontWeight: "bold",
        },
        tabBarStyle: {
          borderLeftColor: "black",
        },

        tabBarIndicatorStyle: {
          backgroundColor: "#a5353a",
        },
      })}
    >
      <Tab.Screen name="DAHAs" component={DahaProfileScreen} />
      <Tab.Screen name="DAWAs" component={DawaProfileScreen} />
      <Tab.Screen name="Reviews" component={ReviewsProfileScreen} />
    </Tab.Navigator>
  );
};

export default GenericProfileTopTabNavigator

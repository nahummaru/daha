import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DahaProfileScreen from "../screens/ProfileTabs/DahaProfileScreen";
import DawaProfileScreen from "../screens/ProfileTabs/DawaProfileScreen";
import ReviewsProfileScreen from "../screens/ProfileTabs/ReviewsProfileScreen";

const Tab = createMaterialTopTabNavigator();

const ProfileTopTabNavigator = ({ navigation }) => {
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

export default ProfileTopTabNavigator;

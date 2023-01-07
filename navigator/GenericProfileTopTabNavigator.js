import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GenericDawaProfileScreen from "../screens/GenericProfileTabs/GenericProfileDawaScreen";
import GenericDahaProfileScreen from "../screens/GenericProfileTabs/GenericProfileDahaScreen";
import GenericReviewsProfileScreen from "../screens/GenericProfileTabs/GenericReviewsProfileScreen";

const Tab = createMaterialTopTabNavigator();

const GenericProfileTopTabNavigator = ({ uidUser, navigation }) => {
  // access the user's data from the passed in prop
  console.log('----------------- GenericProfileTopTabNavigatorr')
  console.log(uidUser)
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
      <Tab.Screen
        name="DAHAs"
        component={GenericDahaProfileScreen}
        initialParams={{uidUser: uidUser}}
      />
      <Tab.Screen
        name="DAWAs"
        component={GenericDawaProfileScreen}
        initialParams={{uidUser: uidUser}}
      />
      <Tab.Screen
        name="Reviews"
        component={GenericReviewsProfileScreen}
        initialParams={{uidUser: uidUser}}
      />
    </Tab.Navigator>
  );
};

export default GenericProfileTopTabNavigator;

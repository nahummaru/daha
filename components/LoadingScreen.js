import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#a5353a" />
    </View>
  );
};

export default LoadingScreen;

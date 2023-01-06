import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const MessagesScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "sup",
    });
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={tailwind("font-semibold")}>
          This is the messages screen
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MessagesScreen;

import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";

const MessagesScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "hello",
    });
  }, []);

  return <Text> this is daha's messages pagef</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#a5353a",
    alignSelf: "left",
    marginTop: "10%",
  },
  pricingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "left",
    marginTop: "1%",
  },
  pricingNumber: {
    fontSize: 20,
    fontWeight: "normal",
    color: "black",
    alignSelf: "left",
    marginTop: "1%",
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    alignSelf: "left",
    marginTop: "1%",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#a5353a",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#a5353a",
    //opacity: '50%',
    height: 60,
    width: "60%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "5%",
    marginTop: "3%",
  },
});
export default MessagesScreen;

import React from "react";
import {
  View,
  Alert,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MessagesScreen from "../screens/MessagesScreen";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import GenericProfileTopTabNavigator from "../navigator/GenericProfileTopTabNavigator";
import FeedStack from "../navigator/FeedStack";

const DawaCard = ({ item }) => {
  const navigation = useNavigation();

  //console.log("------------ this is an item");
  console.log(item.uidUser);
  starIcon = item.starred ? "star" : "star-outline";

  const goToDescription = (uidUser) => {
    console.log("bruh");

    //console.log(uidUser);
    //console.log(item);
    console.log('----------')
    console.log(item.uidUser)
    navigation.navigate("DawaDescription", {
      item: item,  
    });
  };

  // if free
  if (item.price.buyPrice == null && item.price.rentalPrice == null) {
    const price = "FREE:";
    return (
      <View
        style={{
          backgroundColor: "#f8f8f8",
          padding: 20,
          borderRadius: "10%",
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <View>
          <TouchableOpacity onPress={goToDescription}>
            <Image
              style={{
                alignSelf: "center",
                width: "100%",
                height: 200,
                marginTop: 5,
                borderRadius: "10%",
                marginBottom: "5%",
              }}
              source={{ uri: item.itemImage }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ fontSize: 11, fontWeight: "bold", color: "green" }}>
            FREE
          </Text>

          <Ionicons
            style={{ justifyContent: "flex-end", marginTop: -3 }}
            name={starIcon}
            size={17}
          />
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
            alignSelf: "flex-start",
          }}
        >
          {item.itemName}
        </Text>
      </View>
    );
  } else {
    const buyPrefix = item.price.buyPrice == null ? "" : "BUY";
    const buyPrice =
      item.price.buyPrice == null ? "" : item.price.buyPrice + "$";
    const rentPrefix = item.price.rentalPrice == null ? "" : "RENT";
    const rentPrice =
      item.price.rentalPrice == null
        ? ""
        : item.price.rentalPrice + "$" + "/" + item.price.rentalTimeframe + " ";

    return (
      <View
        style={{
          backgroundColor: "#f8f8f8",
          padding: 20,
          borderRadius: "10%",
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <View>
          <TouchableOpacity onPress={goToDescription}>
            <Image
              style={{
                alignSelf: "center",
                width: "100%",
                height: 200,
                marginTop: 5,
                borderRadius: "10%",
                marginBottom: "5%",
              }}
              source={{ uri: item.itemImage }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 11, fontWeight: "bold", color: "#b22222" }}>
            {" "}
            {buyPrefix}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "bold", color: "#b22222" }}>
            {" "}
            {buyPrice}
          </Text>

          <Text style={{ fontSize: 11, fontWeight: "bold", color: "#b22222" }}>
            {" "}
            {rentPrefix}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "bold", color: "#b22222" }}>
            {" "}
            {rentPrice}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Ionicons
              style={{ justifyContent: "flex-end", marginTop: -3 }}
              name={starIcon}
              size={17}
            />
          </View>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
            alignSelf: "flex-start",
          }}
        >
          {item.itemName}
        </Text>
      </View>
    );
  }

  // code some logic to process the prices and shi
  // this will create new two types of cards
  //      - one where there is buy: --- rent:---
  //              - in the case, that it is only rent or only buy, we will just process it here and set that as zero
  //      - one where this is FREE: BUY or RENT
  // one where it

  // define a function that when the image is clicked, a screen will popup with more info

  /* 
  --- This is the code for the location 
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <Ionicons name="location-outline" size={25} />
        <Text style={{ size: 12, }}>{item.postDist}</Text>
      </View>

              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b22222' }}> RENT:</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b22222' }}>18$/day </Text>
  
  */
};

export default DawaCard;

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useState,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Timestamp, toDate } from "firebase/firestore";
import TimeAgo from "@andordavoti/react-native-timeago";
import moment from "moment";
import { NavigationContainer } from "@react-navigation/native";
import FeedStack from "../navigator/FeedStack";
import { useNavigation } from "@react-navigation/core";

const DahaCard = ({ item }) => {
  //setSelectedDate(moment(item.needByDate).format('DD-MM-YYYY hh:mm A'));
  const navigation = useNavigation();
  console.log('--------- what the fuck')
  console.log(item)

  const goToProfile = () => {
    navigation.navigate('UsersProfileScreen', { uidUser: item.uidUser });
  };

  console.log("------- item");
  console.log(item.profilePic);
  console.log(navigation);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "left",
        margin: 10,
        borderRadius: 25,
        alignContent: "stretch",
        backgroundColor: "#f8f8f8",
        padding: 15,
      }}
    >
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <View style={{ flexDirection: "row", width: "80%" , marginTop: -10}}>
          <TouchableOpacity>
            <Image
              style={{ width: 50, borderRadius: 25, height: 50 }}
              source={{ uri: item.profilePic }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <TouchableOpacity
              onPress={goToProfile}
            >
              <Text
                style={{ fontWeight: "bold", marginBottom: 3, fontSize: 17 }}
              >
                {item.userName}
              </Text>
            </TouchableOpacity>
            <TimeAgo style={{fontSize: 13}} dateTo={item.postTime} />
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingTop: 15 }}>
          <TouchableOpacity>
            <Ionicons name="arrow-undo-outline" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            active={item.bookmarked}
          >
            <Ionicons name="heart" size={25} color="#a5353a" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: 18, padding: 15 }}>{item.post}</Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#a5353a", fontWeight: "bold" }}>NEED BY </Text>
        <Text style={{ fontSize: 14 }}>
          {" "}
          {moment(item.needByDate).format("MMMM D, YYYY hh:mma")}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#a5353a", fontWeight: "bold" }}>RETURN BY </Text>

        <Text style={{ fontSize: 14 }}>
          {" "}
          {moment(item.returnByDate).format("MMMM D, YYYY hh:mma")}
        </Text>
      </View>
    </View>
  );
};

export default DahaCard;

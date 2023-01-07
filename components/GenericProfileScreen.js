import React, { useEffect } from "react";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { AuthenticatedUserContext } from "../App";
import GenericProfileTopTabNavigator from "../navigator/GenericProfileTopTabNavigator";
import useState from "react-usestateref";
import { Entypo } from "@expo/vector-icons";
import Stars from "react-native-stars";
import { getDoc, doc, collection } from "@firebase/firestore";
import {
  ActivityIndicator,
  SafeAreaView,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { db, auth } from "../config/firebase";
import LoadingScreen from "./LoadingScreen";

// we should pass in the user and populate the page with their specifc stuff
const GenericProfileScreen = ({ route, navigation }) => {
  console.log("hello");
  const uidUser = route.params.uidUser;
  console.log(uidUser);
  console.log("--------");

  // const { user, setUser } = useContext(AuthenticatedUserContext);
  // const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [thisUserInfo, setThisUserInfo] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const [image, setImage] = useState(null);

  // process profile image

  //const [userInfo, setUserInfo, userInfoRef] = useState(null)

  // get the user's profile information
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        const docRef = doc(db, "users", uidUser);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(data);
        // process profile image
        const pic =
          data.profilePic == null
            ? "../assets/blank-avatar.jpg"
            : data.profilePic;
        setProfilePic(pic);
        setThisUserInfo(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    console.log("we are at least getting here");
    getUserInfo();
  }, []);
  console.log(thisUserInfo);

  if (thisUserInfo == null) {
    console.log("it has not been loaded!!!");
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <TouchableOpacity>
            <Avatar.Image source={{ uri: profilePic }} size={100} />
          </TouchableOpacity>
          <View pointerEvents="none" style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                  color: "black",
                },
              ]}
            >
              {thisUserInfo.username}
            </Title>
            <Stars
              default={2.5}
              count={5}
              half={true}
              starSize={120}
              fullStar={
                <Entypo name={"star"} size={30} style={[styles.myStarStyle]} />
              }
              emptyStar={
                <Entypo
                  name={"star"}
                  size={30}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Entypo name={"star"} size={30} style={[styles.myStarStyle]} />
              }
            />
          </View>
        </View>
      </View>
      <GenericProfileTopTabNavigator uidUser={uidUser}>
        <Text>hello</Text>
      </GenericProfileTopTabNavigator>
    </SafeAreaView>
  );
};

export default GenericProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  myStarStyle: {
    color: "#ffd700",

    backgroundColor: "transparent",

    textShadowRadius: 0,
    borderRadius: 5,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});

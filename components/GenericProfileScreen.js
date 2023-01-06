import React, { useEffect } from "react";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { AuthenticatedUserContext } from "../App";
import ProfileTopTabNavigator from "../navigator/ProfileTopTabNavigator";
import * as ImagePicker from "expo-image-picker";
import useState from "react-usestateref";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Stars from "react-native-stars";
import { getDoc, doc, collection } from "@firebase/firestore";
import {
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { db, auth } from "../config/firebase";

// we should pass in the user and populate the page with their specifc stuff
const ProfileScreen = ({ item }) => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [thisUserInfo, setThisUserInfo] = useState(null);
  const [image, setImage] = useState(null);
  //const [userInfo, setUserInfo, userInfoRef] = useState(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const docRef = doc(db, "users", item.uidUser);

  // get the user's profile information
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(data);
        console.log(item.uidUser);
        setThisUserInfo(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <TouchableOpacity>
            <Avatar.Image
              source={{ uri: thisUserInfo.profilePic }}
              size={100}
            />
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

      <ProfileTopTabNavigator>
        <Text>hello</Text>
      </ProfileTopTabNavigator>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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

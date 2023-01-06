import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useEffect, useContext } from "react";
import { useTailwind } from "tailwind-rn";
import TopTabNavigator from "../navigator/TopTabNavigator";
import { AuthenticatedUserContext } from "../App";
import { UserInfoContext } from "../App";
import { db } from "../config/firebase";
import { getDoc, doc } from "@firebase/firestore";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const docRef = doc(db, "users", user.uid);

  // will place user data in Context
  useEffect(() => {
    const contextUserInfo = async () => {
      try {
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log(data);
        console.log(user.uid);
        setUserInfo(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    contextUserInfo();
  }, []);

  // this modifies the home page to say "Stanford" rather than "Home"
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Stanford",
    });
  }, []);

  return <TopTabNavigator>
      
  </TopTabNavigator>;
};

export default HomeScreen;

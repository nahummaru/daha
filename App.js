import { View, ActivityIndicator } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import React, { createContext, useContext, useEffect, useState } from "react";
import TabNavigator from "./navigator/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./navigator/AuthStack";
import { set } from "@firebase/database";

export const AuthenticatedUserContext = createContext({});
export const UserInfoContext = createContext({});

const RootStack = createNativeStackNavigator();

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser, userRef] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser, userRef }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (user) {
    console.log("user info: ");
    console.log(user.uid);
    console.log(user.email);

    return (
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen
            name="MainNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    );
  }
  return <AuthStack />;
}

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthenticatedUserProvider>
        <UserInfoProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </UserInfoProvider>
      </AuthenticatedUserProvider>
    </TailwindProvider>
  );
}

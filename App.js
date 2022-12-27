import { View, ActivityIndicator } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import React, { useState, createContext, useContext, useEffect } from 'react';
import TabNavigator from './navigator/TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigator/AuthStack';

export const AuthenticatedUserContext = createContext({});
const RootStack = createNativeStackNavigator();

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={ {user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


function RootNavigator() {

  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (user) {
    console.log(user)
    return (
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="MainNavigator" component={TabNavigator} options={{ headerShown: false }} />
        </RootStack.Group>
      </RootStack.Navigator>
    )
  } return (
    <AuthStack />
  )

}


export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthenticatedUserProvider>

        <NavigationContainer>
          <RootNavigator />

        </NavigationContainer>
      </AuthenticatedUserProvider>

    </TailwindProvider>

  );
}


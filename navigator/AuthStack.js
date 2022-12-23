import React from 'react'
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignUpScreen';


const AuthStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}

export default AuthStack

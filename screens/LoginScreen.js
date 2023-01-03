import { signInWithEmailAndPassword } from 'firebase/auth';
import {React, useState} from 'react';
import { View, KeyboardAvoidingView, Text, Alert , StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native';
import { auth, db } from '../config/firebase';
import {set} from 'firebase/database'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native-gesture-handler';




const backImage = require("../assets/icon.png");



const Login = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login Success"))
        .catch((err) => Alert.alert("Login Error", err.message));
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
    <View style={styles.container}>
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}> Login </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          
          <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18, }}> Log In</Text>
          </TouchableOpacity>
          
          <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'left', alignSelf: 'center', marginBottom: '50%'}}>
            <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{color: '#a5353a', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
            </TouchableOpacity>
          </View>


        </SafeAreaView>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
    marginTop: '40%'
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#a5353a',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Login

import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert, ScrollView } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './LoginScreen';


//const backImage = require("../assets/icon.png");
import { AuthenticatedUserContext } from '../App.js'


const addUserToDatabase = () => {
  set(db)
}

export default function SignUpScreen({ navigation }) {
  const { user, setUser } = useContext(AuthenticatedUserContext);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };


  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[userName, setUserName] = useState('');

  const onHandleSignup = ({ navigation }) => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => { navigation.navigate('Login') })
        .catch((err) => Alert.alert("Login error", err.message));

      // CALL A FUNCTION THAT CREATES A USER
      // WE CAN ACCESS UID, EMAIL AND THAT'LL BE THE USER
      // THEN IN THE NEXT PAGE WE WILL A CREATE PROFILE PAGE
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.whiteSheet} />
      <ScrollView style={styles.ScrollView}>
      <SafeAreaView style={styles.form}>

        <Text style={styles.title}>Sign Up</Text>

        <StatusBar hidden={true} />
          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, left: '37%', marginBottom: '5%' }} />}
          <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
            <Ionicons name={"add"} size={20} color= "black" style={{ marginTop: '0%', marginBottom: '5%', left: '48%' }} />
          </TouchableOpacity>
          <StatusBar style="auto" />

        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="none"
          autoFocus={true}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

<TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="none"
          autoFocus={true}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="University Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

<TextInput
          style={styles.input}
          placeholder="Username (20 Characters or less)"
          autoCapitalize="none"
          autoFocus={true}
          value={userName}
          onChangeText={(text) => setUserName(text)}
          maxLength={20}
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
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Sign Up</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginBottom: '-20%'}}>
          <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: '#f57c00', fontWeight: '600', fontSize: 14, marginBottom: '0%' }}> Log In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
    marginTop: '15%'
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
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
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
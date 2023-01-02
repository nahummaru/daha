import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert, ScrollView } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './LoginScreen';
import { doc, setDoc, collection, Timestamp, query, where } from '@firebase/firestore';


//const backImage = require("../assets/icon.png");
import { AuthenticatedUserContext } from '../App.js'



export default function SignUpScreen({ navigation }) {

  const { user, setUser, userRef } = useContext(AuthenticatedUserContext);
  // console.log('-------------hello')
  // console.log(user)

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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);
  const [unique, setUnique] = useState(null);

  async function addUserToDatabase(user) {
    // connects us to "users" in the a document with a key of the user.uid (unique)
    const docRef = doc(db, "users", user.uid);

    // the userdata we are adding
    const userData = {
      uidUser: user.uid,
      username: userName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      timeCreated: Timestamp.now(),
      profilePic: image
    };

    // sets the doc we refernced with the data
    setDoc(docRef, userData)
      .then(() => {
        console.log("Document has been added successfully");
        //console.log(userData)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const checkName = async () => {
    const coll = collection(db, "users");
    const query_ = query(coll, where('username', '==', userName));
    const snapshot = (await getCountFromServer(query_));
    setUnique(snapshot.data().count);
    }



  const onHandleSignup = ({ navigation }) => {
    if (email !== '' && password !== '' && lastName !== '' && firstName !== '' && userName !== '') {
      if ((/@stanford.edu/.test(email))) {
        checkName();
        if(unique == 0){
          createUserWithEmailAndPassword(auth, email, password)
          .then(async userCredential => {
            addUserToDatabase(userCredential.user)
          })
          .catch((err) => Alert.alert("Login error", err.message));
        }     
        else{
          (err) => Alert.alert("username in use", err.message);
      setError("Username already in use")
      setUserName(null);
        }

      }

    }
    else {
      (err) => Alert.alert("please use stanford email", err.message);
      setError("Please use a @stanford.edu email")
      setEmail(null);
    }

    // CALL A FUNCTION THAT CREATES A USER
    // WE CAN ACCESS UID, EMAIL AND THAT'LL BE THE USER
    // THEN IN THE NEXT PAGE WE WILL A CREATE PROFILE PAGE
  }


  return (
    <View style={styles.container}>

      <View style={styles.whiteSheet} />
      <ScrollView style={styles.ScrollView}>
        <SafeAreaView style={styles.form}>

          <Text style={styles.title}>Sign Up</Text>


          <Text style={{ fontWeight: 'normal', color: 'red', fontSize: 18, marginLeft: 'auto', marginRight: 'auto', marginBottom: '3%' }}> {error}</Text>

          <StatusBar hidden={true} />

          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, left: '37%', marginBottom: '5%' }} />}
          <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
            <Ionicons name={"add"} size={20} color="black" style={{ marginTop: '0%', marginBottom: '5%', left: '48%' }} />
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
            secureTextEntry={false}
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

          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginBottom: '-20%' }}>
            <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: '#a5353a', fontWeight: '600', fontSize: 14, marginBottom: '0%' }}> Log In</Text>
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
    color: "#a5353a",
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
    backgroundColor: '#a5353a',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
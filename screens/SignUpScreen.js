import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  doc,
  setDoc,
  Timestamp,
  where,
  getCountFromServer,
  query,
  collection,
  onSnapshot,
} from "@firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "@firebase/storage";
import Login from "./LoginScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthenticatedUserContext } from "../App.js";

export default function SignUpScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);

  const [uploading, setUploading] = useState(null);
  const [url, setUrl] = useState(null);
  // const { user, setUser, userRef } = useContext(AuthenticatedUserContext);
  // console.log('-------------hello')
  // console.log(user)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [3, 3],
      allowsEditing: true,
    });

    if (!result.canceled) {
      const file = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 200, height: 200 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      setImage(file.uri);
      // setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    setUploading(true);
    const filename = image.substring(image.lastIndexOf("/") + 1);
    const reference = ref(storage, "dawas/" + filename);
    const img = await fetch(image);
    const blob = await img.blob();
    const newFile = new File([blob], `${filename}.jpeg`, {
      type: "image/jpeg",
    });

    try {
      await uploadBytes(reference, newFile);
      setUploading(false);
      setImage(null);
      const url = await getDownloadURL(reference);
      console.log("---- url: " + url);
      return url;
    } catch {
      console.log(console.error);
    }
  };

  // do the getdoanlaodURL in the upload Image

  async function addUserToDatabase(user) {
    console.log("getting -------------------------profilePic");

    const profilePic = await uploadImage();
    console.log("-------------------------profilePic");

    console.log(profilePic);
    // connects us to "users" in the a document with a key of the user.uid (unique)
    const docRef = doc(db, "users", user.uid);
    const filename = userName + "-profile-picture";

    // the userdata we are adding
    const userData = {
      uidUser: user.uid,
      username: userName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      timeCreated: Timestamp.now(),
      profilePic: profilePic,
      reviews: {
        numStars: 5,
        numReviews: 0,
      },
      bookmarks: {
        dahas: [],
        dawas: [],
      },
    };

    console.log("the user being posted: ");
    console.log(userData);

    // sets the doc we refernced with the data
    await setDoc(docRef, userData)
      .then(() => {
        console.log("Document has been added successfully");
        //console.log(userData)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const isUsernameUnique = async () => {
    const q = query(collection(db, "users"), where("username", "==", userName));
    console.log("isUsernameUnique is being run");
    const snapshot = await getCountFromServer(q);
    console.log("count: ", snapshot.data().count);
    return snapshot.data().count == 0;
  };

  const hasWhiteSpace = (s) => {
    return s.indexOf(" ") >= 0;
  };

  // handles sign up and makes sure that the inputed information is valid
  const onHandleSignup = async ({ navigation }) => {
    if (
      email !== "" &&
      password !== "" &&
      lastName !== "" &&
      firstName !== "" &&
      userName !== ""
    ) {
      const isUnique = await isUsernameUnique();
      if (isUnique) {
        if (!hasWhiteSpace(userName)) {
          if (/@stanford.edu/.test(email)) {
            createUserWithEmailAndPassword(auth, email, password)
              .then(async (userCredential) => {
                await addUserToDatabase(userCredential.user)
                  .then(console.log("USER HAS BEEN ADDED"))
                  .catch(Alert.alert(error));
              })
              .catch((err) => Alert.alert("Login error", err.message));
          } else {
            (err) => Alert.alert("please use stanford email", err.message);
            setError("Please use a @stanford.edu email");
          }
        } else {
          (err) =>
            Alert.alert(
              "Username must have no spaces in it — try another one!",
              err.message
            );
          setError("Username must have no spaces — try another one!");
        }
      } else {
        (err) =>
          Alert.alert(
            "Username is already in use — try another one!",
            err.message
          );
        setError("Username is already in use — try another one!");
      }
    } else {
      (err) => Alert.alert("Please fill out all fields!", err.message);
      setError("Please fill out all fields!");
      setEmail(null);
    }
    console.log("---------------- this should be the last message of sign up");

    // CALL A FUNCTION THAT CREATES A USER
    // WE CAN ACCESS UID, EMAIL AND THAT'LL BE THE USER
    // THEN IN THE NEXT PAGE WE WILL A CREATE PROFILE PAGE
  };

  return (
    <ScrollView bounce={false}>
      <View style={styles.container}>
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>

          <Text
            style={{
              fontWeight: "normal",
              color: "red",
              fontSize: 18,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
          >
            {" "}
            {error}
          </Text>

          <StatusBar hidden={true} />

          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                left: "37%",
                marginBottom: "5%",
              }}
            />
          )}
          <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
            <Ionicons
              name={"add"}
              size={20}
              color="black"
              style={{ marginTop: "0%", marginBottom: "5%", left: "48%" }}
            />
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
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginBottom: "50%",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              Have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ color: "#a5353a", fontWeight: "600", fontSize: 14 }}
              >
                {" "}
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
    marginTop: "20%",
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
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#a5353a",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

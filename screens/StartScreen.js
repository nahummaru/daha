import { signInWithEmailAndPassword } from "firebase/auth";
import { React, useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { auth, db } from "../config/firebase";
import { set } from "firebase/database";

const backImage = require("../assets/icon.png");

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Image
          source={require("../assets/logo2.png")}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-30%",
            marginBottom: "5%",
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 25 }}>
            {" "}
            LOG IN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.button}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 25 }}>
            {" "}
            REGISTER
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a5353a",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "white",
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
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#a5353a",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#e1a2a5",
    //opacity: '50%',
    height: "10%",
    width: "60%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "10%",
  },
});

export default StartScreen;

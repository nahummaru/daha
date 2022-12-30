import React from 'react'
import { View, Text, Alert, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { signOut, getAuth } from '@firebase/auth';
import { auth } from '../config/firebase';

const SettingsScreen = () => {

  const signOutFunction = () => {
    signOut(auth).then(() => {
      navigation.replace('Login')
    }).catch((error) => {
      //an error happened
    });
  }
  return (
    <View>
      <ScrollView style={styles.ScrollView}>
      <SafeAreaView style={styles.form}>
      <TouchableOpacity style={styles.button} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <Ionicons name="moon" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>Dark Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <MaterialIcons name="privacy-tip" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <MaterialCommunityIcons name="note-text-outline" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>Terms of Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <TouchableOpacity>
            <View style={{marginLeft: '90%', top: 25}}>
            <AntDesign name="arrowright" size={24} color="white" />
            </View>
        </TouchableOpacity>
      <View style={{marginLeft: '5%', top: 0}} >
      <Ionicons name="md-chatbox-ellipses-outline" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -25}}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
      <TouchableOpacity>
            <View style={{marginLeft: '90%', top: 25}}>
            <AntDesign name="arrowright" size={24} color="white" />
            </View>
        </TouchableOpacity>
      <View style={{marginLeft: '5%', top: 0}} >
      <Ionicons name="people" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -25 }}>Referrals</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <AntDesign name="questioncircle" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <Ionicons name="send" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ signOutFunction} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <Ionicons name="lock-closed" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.lastButton} >
      <View style={{marginLeft: '5%', top: 12.5}} >
      <FontAwesome name="ban" size={24} color="white"  />
      </View>
      <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 20, marginLeft: '15%', top: -12.5 }}>Deactivate Account</Text>
      </TouchableOpacity>
      </SafeAreaView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    position: 'relative ',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
  },
  prefix: {
    fontSize: 25,
    top: 100,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  bottom: {
    top: 100,
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold'
  },

  header: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: "#a5353a",
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'left',
    alignSelf: 'left',
    marginTop: '15%',
    marginBottom: '-11%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  lastButton: {
    backgroundColor: "#a5353a",
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'left',
    alignSelf: 'left',
    marginTop: '15%',
    marginBottom: '0%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
})

export default SettingsScreen

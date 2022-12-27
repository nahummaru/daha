import React from 'react'
import { View, Text, Alert, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';



const AddDahaScreen = () => {


  return (
    <View style={styles.container}>

      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}> Does anyone have a... </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />

        <TouchableOpacity style={styles.button} >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}> Post it!</Text>
        </TouchableOpacity>


      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "flex-start",
    marginTop: 30,
    paddingBottom: 12,
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
    justifyContent: 'flex-start',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#a5353a",
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})

export default AddDahaScreen

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AddDahaScreen from './AddDahaScreen'
import AddDawaScreen from './AddDawaScreen'
import Login from '../LoginScreen'
import { rosybrown } from 'color-name'


const PostModal = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.prefix}>Need a new outfit?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddDaha')}>
      <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 30 }}>DAHA</Text>
      </TouchableOpacity>
      <Text style={styles.bottom}>Cleaning out your closet?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddDawa')}>
      <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 30 }}>DAWA</Text>
      </TouchableOpacity>
      </View>
  )
}

export default PostModal



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    position: 'relative '
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
    marginTop: '15%',
    marginBottom:'-5%',
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  bottom: {
    fontSize: 25,
    marginTop: '5%',
    marginBottom: '-5%',
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
    height: 68,
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '30%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
})
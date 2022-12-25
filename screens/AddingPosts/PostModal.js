import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AddDahaScreen from './AddDahaScreen'
import AddDawaScreen from './AddDawaScreen'
import Login from '../LoginScreen'
import { rosybrown } from 'color-name'


const PostModal = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text styles={styles.prefix}>Hello</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddDaha')}>
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>DAHA</Text>
      </TouchableOpacity>
      <Text styles={styles.prefix}>Hello</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddDawa')}>
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>DAWA</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PostModal



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative '
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
  },
  prefix: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#a5353a",
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
})
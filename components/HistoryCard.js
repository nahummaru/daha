import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons, Entypo} from 'react-native-vector-icons';
import { Timestamp, toDate } from 'firebase/firestore';
import TimeAgo from '@andordavoti/react-native-timeago';
import { format } from 'date-fns'


// using the item.uidUser, we can then query for the profile picture

const HistoryCard = ({ item }) => {
  return (
    <View style={{ flex: 1, alignItems: 'left', backgroundColor: '#f8f8f8', padding: 10, marginBottom: 15, borderRadius: 25, alignContent: 'stretch' }}>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '80%' }}>
          <View style={{ flexDirection: 'row', marginLeft: '3%' }}>

            <Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 17 }}>{item.userName} </Text> 
            <Text style={{marginBottom: 3, fontSize: 17, color: 'gray'}}>borrowed from</Text>
            <Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 17,}}> you </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: '1%' }}>
          <TouchableOpacity style={{ paddingLeft: '30%' }} active={item.bookmarked}>
            <Entypo name="dots-three-horizontal" size={25} color="#a5353a" />
          </TouchableOpacity>
        </View>

      </View>
      <Text style={{ fontSize: 18, padding: 15, marginRight: '3%' }}>{item.post}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "#a5353a", fontWeight: 'bold', marginLeft: '3%' }}>BORROWED ON </Text>
        <Text style={{ fontSize: 14 }}> {item.needByDate}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "#a5353a", fontWeight: 'bold', marginLeft: '3%' }}>RETURN BY </Text>

        <Text style={{ fontSize: 14 }}> {item.returnByDate}</Text>
      </View>
    </View>
  )
}

export default HistoryCard
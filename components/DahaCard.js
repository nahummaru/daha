import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, useState} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Timestamp, toDate } from 'firebase/firestore';
import TimeAgo from '@andordavoti/react-native-timeago';
import { format } from 'date-fns';
import moment from 'moment';

const DahaCard = ({ item }) => {
  
  //setSelectedDate(moment(item.needByDate).format('DD-MM-YYYY hh:mm A'));

  return (
    <View style={{ flex: 1, alignItems: 'left', backgroundColor: '#f8f8f8', padding: 10, marginBottom: 15, borderRadius: 25, alignContent: 'stretch' }}>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '80%' }}>
          <Image style={{ width: 50, borderRadius: 25, height: 50 }} source={{ uri: item.profilePic}} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>

            <Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 17 }}>{item.userName}</Text>
            <TimeAgo dateTo={item.postTime} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 15 }}>
          <TouchableOpacity>
            <Ionicons name="arrow-undo-outline" size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingLeft: 10 }} active={item.bookmarked}>
            <Ionicons name="bookmark" size={25} color="#a5353a" />
          </TouchableOpacity>
        </View>

      </View>
      <Text style={{ fontSize: 18, padding: 15 }}>{item.post}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "#a5353a", fontWeight: 'bold' }}>NEED BY </Text>
        <Text style={{ fontSize: 14 }}> {moment(item.needByDate).format('MMMM D, YYYY hh:mma')}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "#a5353a", fontWeight: 'bold' }}>RETURN BY </Text>

        <Text style={{ fontSize: 14 }}> {moment(item.returnByDate).format('MMMM D, YYYY hh:mma')}</Text>
      </View>
    </View>
  )
}

export default DahaCard

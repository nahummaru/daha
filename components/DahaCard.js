import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Timestamp, toDate } from 'firebase/firestore';
import TimeAgo from '@andordavoti/react-native-timeago';


// using the item.uidUser, we can then query for the profile picture

const DahaCard = ({ item }) => {
<<<<<<< HEAD
  bookIcon = item.bookmarked ? 'bookmark' : 'bookmark-outline';
=======

>>>>>>> bb3f2802625b2019051375761a733fe0c723dc0c
  return (
    <View style={{ flex: 1, alignItems: 'left', backgroundColor: '#f8f8f8', padding: 10, marginBottom: 15, borderRadius: 25, alignContent: 'stretch' }}>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '80%' }}>
          <Image style={{ width: 50, borderRadius: 25, height: 50 }} source={require('../assets/users/user-2.jpg')} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>

            <Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 17 }}>{item.userName}</Text>
            <TimeAgo dateTo={item.postTime} />
          </View>
        </View>

<<<<<<< HEAD
        <InteractionWrapper>
        <View
          style={{
            flexDirection: "row",
            alignItems: 'flex-end'
          }}
        >
          <Interaction>
=======
        <View style={{ flexDirection: 'row', paddingTop: 15 }}>
          <TouchableOpacity>
>>>>>>> bb3f2802625b2019051375761a733fe0c723dc0c
            <Ionicons name="arrow-undo-outline" size={25} />
          </TouchableOpacity>

<<<<<<< HEAD
          <Interaction active={item.bookmarked}>
            <Ionicons name={bookIcon} size={25} color="#a5353a" />
          
          </Interaction>
        </View>
        </InteractionWrapper>
=======
          <TouchableOpacity style={{ paddingLeft: 10 }} active={item.bookmarked}>
            <Ionicons name="bookmark" size={25} color="#a5353a" />
          </TouchableOpacity>
        </View>
>>>>>>> bb3f2802625b2019051375761a733fe0c723dc0c

      </View>
      <Text style={{ fontSize: 18, padding: 15 }}>{item.post}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "#a5353a", fontWeight: 'bold' }}>NEED BY </Text>
        <Text style={{ fontSize: 14 }}> December 1st, 7pm </Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: "#a5353a", fontWeight: 'bold' }}>RETURN BY </Text>

        <Text style={{ fontSize: 14 }}> December 2, 3pm </Text>
      </View>
    </View>
  )
}

export default DahaCard

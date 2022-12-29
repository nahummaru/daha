import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Timestamp, toDate } from 'firebase/firestore';

// using the item.uidUser, we can then query for the profile picture

const DahaCard = ({ item }) => {

  return (
    <View style={{ flex: 1, alignItems: 'left', backgroundColor: '#f8f8f8', padding: 10, marginBottom: 15, borderRadius: 25, alignContent: 'stretch' }}>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '80%' }}>
          <Image style={{ width: 50, borderRadius: 25, height: 50 }} source={require('../assets/users/user-2.jpg')} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>

            <Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 15 }}>{item.userName}</Text>
            <Text style={{ color: 'gray' }}>{item.postTime}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 15 }}>
          <View>
            <Ionicons name="arrow-undo-outline" size={25} />
          </View>

          <View style={{ paddingLeft: 10 }} active={item.bookmarked}>
            <Ionicons name="bookmark" size={25} color="#a5353a" />
          </View>
        </View>

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


  return (
    <Card>
      <TopLevel>
        <UserInfo>
          <UserImg source={require('../assets/users/user-2.jpg')} />
          <UserInfoText>
            <UserName>asdf</UserName>
            <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
        </UserInfo>

        <InteractionWrapper>
          <Interaction>
            <Ionicons name="arrow-undo-outline" size={25} />
          </Interaction>

          <View style={{ position: "absolute", bottom: 0, alignSelf: "flex-end" }} active={item.bookmarked}>
            <Ionicons name="bookmark" size={25} color="#a5353a" />
          </View>
        </InteractionWrapper>

      </TopLevel>
      <PostText>{item.post}</PostText>

    </Card>
  )
}

export default DahaCard

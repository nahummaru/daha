import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Card, UserInfo, TopLevel, UserImg, UserName, UserInfoText, PostDist, PostImg, PostText, InteractionWrapper, InteractionText, Interaction, StateText, LocationWrapper } from '../styles/DawaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DawaCard = ({ item }) => {

  starIcon = item.starred ? 'star' : 'star-outline';

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f8f8f8', padding: 20, borderRadius: 5 }}>
      <Image style={{ width: '100%', height: 250, marginTop: 5, borderRadius: '10%', marginBottom: '5%' }} source={item.postImg} />

      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <View
          style={{
            flexDirection: "row",
          }}>
          <StateText>{item.StateText}</StateText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: 'flex-end'
          }}>

          <Ionicons style={{ marginLeft: '10%', marginTop: '-10%' }} name={starIcon} size={17} />

        </View>
      </View>

      <Text style={{ size: 14, fontWeight: 'bold', marginBottom: 15, alignSelf: 'flex-start' }}>{item.post}</Text>

      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <Ionicons name="location-outline" size={25} />
        <Text style={{ size: 12, }}>{item.postDist}</Text>
      </View>
    </View>
  )
  
  return (
    <Card>
      <PostImg source={item.postImg} />
      <InteractionWrapper>
        <View
          style={{
            flexDirection: "row",
          }}>
          <StateText>{item.StateText}</StateText>
        </View>


        <View
          style={{
            flexDirection: "row",
            alignItems: 'flex-end'
          }}
        >


          <Ionicons name={starIcon} size={17} />

        </View>
      </InteractionWrapper>

      <PostText>{item.post}</PostText>

      <LocationWrapper>
        <Ionicons name="location-outline" size={25} />

        <PostDist>{item.postDist}</PostDist>

      </LocationWrapper>
    </Card>
  )
}

export default DawaCard
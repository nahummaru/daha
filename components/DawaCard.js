import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Container, Card, UserInfo, TopLevel, UserImg, UserName, UserInfoText, PostDist, PostImg, PostText, InteractionWrapper, InteractionText, Interaction, StateText, LocationWrapper } from '../styles/DawaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DawaCard = ({ item }) => {
  console.log('------------ this is an item')
  console.log(item)

  starIcon = item.starred ? 'star' : 'star-outline';

  // code some logic to get the prices and shi


  // define a function that when the image is clicked, a screen will popup with more info



  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f8f8f8', padding: 20, borderRadius: '10%', marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
      <Image style={{ width: '100%', height: 250, marginTop: 5, borderRadius: '10%', marginBottom: '5%' }} source={item.postImg} />
      
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>

          <Text style={{ size: 12, fontWeight: 'bold', color: '#b22222' }}>{item.StateText}</Text>
          <Ionicons style={{  }} name={starIcon} size={17} />

      </View>

      <Text style={{ size: 14, fontWeight: 'bold', marginBottom: 15, alignSelf: 'flex-start' }}>{item.post}</Text>

      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <Ionicons name="location-outline" size={25} />
        <Text style={{ size: 12, }}>{item.postDist}</Text>
      </View>
    </View>
  )
}

export default DawaCard
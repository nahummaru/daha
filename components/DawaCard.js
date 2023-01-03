import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Container, Card, UserInfo, TopLevel, UserImg, UserName, UserInfoText, PostDist, PostImg, PostText, InteractionWrapper, InteractionText, Interaction, StateText, LocationWrapper } from '../styles/DawaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DawaCard = ({ item }) => {
  console.log('------------ this is an item')
  console.log(item)

  starIcon = item.starred ? 'star' : 'star-outline';

  // code some logic to process the prices and shi


  // define a function that when the image is clicked, a screen will popup with more info
  /* 
  --- This is the code for the location 
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
        <Ionicons name="location-outline" size={25} />
        <Text style={{ size: 12, }}>{item.postDist}</Text>
      </View>

              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b22222' }}> RENT:</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b22222' }}>18$/day </Text>
  
  */



  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f8f8f8', padding: 20, borderRadius: '10%', marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5 }}>

      <Image style={{ width: '100%', height: 200, marginTop: 5, borderRadius: '10%', marginBottom: '5%' }} source={{ uri: item.itemImage }} />


      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#b22222' }}>BUY:</Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#b22222' }}>17$ </Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#b22222' }}>RENT:</Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#b22222' }}>18$/day </Text>


        <Ionicons style={{ justifyContent: 'flex-end', marginTop: -3 }} name={starIcon} size={17} />

      </View>


      <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10, alignSelf: 'flex-start' }}>{item.itemName}</Text>


    </View>
  )
}

export default DawaCard
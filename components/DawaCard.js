import React from 'react'
import { View, Text } from 'react-native'
import { Container, Card, UserInfo, TopLevel, UserImg, UserName, UserInfoText, PostDist, PostImg, PostText, InteractionWrapper, InteractionText, Interaction, StateText, LocationWrapper } from '../styles/DawaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DawaCard = ({ item }) => {

    starIcon = item.starred ? 'star' : 'star-outline';
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
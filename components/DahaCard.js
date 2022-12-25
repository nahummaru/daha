import React from 'react'
import { View, Text } from 'react-native'
import { Container, Card, UserInfo, TopLevel, UserImg, UserName, UserInfoText, PostTime, PostImg, PostText, InteractionWrapper, InteractionText, Interaction } from '../styles/DahaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DahaCard = ({ item }) => {
  return (
    <Card>

      <TopLevel>
        <UserInfo>
          <UserImg source={item.userImg} />
          <UserInfoText>
            <UserName>{item.userName}</UserName>
            <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
        </UserInfo>

        <InteractionWrapper>
          <Interaction>
            <Ionicons name="arrow-undo-outline" size={25} />
          </Interaction>

          <Interaction active={item.bookmarked}>
            <Ionicons name="bookmark" size={25} color="#a5353a" />
          </Interaction>
        </InteractionWrapper>

      </TopLevel>
      <PostText>{item.post}</PostText>


    </Card>
  )
}

export default DahaCard

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Card, UserInfo, TopLevel, UserImg, UserName, UserInfoText, PostTime, PostImg, PostText, InteractionWrapper, InteractionText, Interaction } from '../styles/DahaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Stars from 'react-native-stars';
import { Entypo } from '@expo/vector-icons';

const ReviewCard = ({ item }) => {
  return (
    <Card>

      <TopLevel>
        <UserInfo>
          <UserImg source={item.userImg} />
          <UserInfoText>
            <UserName>{item.userName}</UserName>
          </UserInfoText>
          <Stars
                            default={2.5}
                            count={5}
                            half={true}
                            starSize={20000}


                            fullStar={<Entypo name={'star'} size={20} style={[styles.myfirstStarStyle]} />}
                            emptyStar={<Entypo name={'star'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Entypo name={'star'} size={20} style={[styles.myStarStyle]} />}
                        />
        </UserInfo>

        <InteractionWrapper>
          <Interaction>
            <Ionicons name="arrow-undo-outline" size={25} />
          </Interaction>
        </InteractionWrapper>

      </TopLevel>
      <PostText>{item.post}</PostText>


    </Card>
  )
}

export default ReviewCard

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
  },
  row: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
  },
  infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
  },
  menuWrapper: {
      marginTop: 10,
  },
  menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
  },
  menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
  },
  myStarStyle: {
      color: '#ffd700',

      backgroundColor: 'transparent',

      textShadowRadius: 0,
      borderRadius: 5,
  },
  myfirstStarStyle: {
    color: '#ffd700',

    backgroundColor: 'transparent',

    textShadowRadius: 0,
    borderRadius: 5,
    marginLeft: '0%'
},
  myEmptyStarStyle: {
      color: 'white',
  }
});

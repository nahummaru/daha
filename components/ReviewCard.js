import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Timestamp, toDate } from 'firebase/firestore';
import { Entypo } from '@expo/vector-icons';
import Stars from 'react-native-stars';


// using the item.uidUser, we can then query for the profile picture

const ReviewCard = ({ item }) => {

  return (
    <View style={{ flex: 1, alignItems: 'left', backgroundColor: '#f8f8f8', padding: 10, marginBottom: 15, borderRadius: 25, alignContent: 'stretch' }}>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '80%' }}>
          <Image style={{ width: 50, borderRadius: 25, height: 50 }} source={require('../assets/users/user-2.jpg')} />
          <View pointerEvents="none" style={{ flexDirection: 'column', marginLeft: 10 }}>

            <Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 15 }}>{item.userName}</Text>
            <Stars
                            
                            default={item.rating}
                            count={5}
                            half={true}
                            starSize={120}


                            fullStar={<Entypo name={'star'} size ={30} style={[styles.myStarStyle]} />}
                            emptyStar={<Entypo name={'star'} size={30} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Entypo name={'star'} size= {30} style={[styles.myStarStyle]} />}
                        />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 15, paddingLeft: 30  }}>
          <TouchableOpacity>
            <Ionicons name="arrow-undo-outline" size={25}  />
          </TouchableOpacity>
        </View>

      </View>
      <Text style={{ fontSize: 18, padding: 15 }}>{item.post}</Text>

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

export default ReviewCard

const styles = StyleSheet.create({ 
  myStarStyle: {
      color: '#ffd700',

      backgroundColor: 'transparent',

      textShadowRadius: 0,
      borderRadius: 5
  },
  myEmptyStarStyle: {
      color: 'white',
  }
});






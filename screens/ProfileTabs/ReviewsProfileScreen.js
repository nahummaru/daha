import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, SkeletonPlaceholder, StyleSheet, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import useState from 'react-usestateref'
import ReviewCard from '../../components/ReviewCard';
import { AntDesign, Entypo } from '@expo/vector-icons';





const Posts = [
  {
    id: '1',
    userName: 'Carmel L',
    userImg: require('../../assets/users/user-3.jpg'),
    rating: 1,
    post:
      'Nahum ruined my clothes',

  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/users/user-1.jpg'),
    rating: 5,
    post:
      'Wore his basketball jersey to ksig and felt sexy.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/users/user-4.jpg'),
    rating: 4,
    post:
      'Reasonable Pricing',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/users/user-6.jpg'),
    rating: 4,
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/users/user-7.jpg'),
    rating: 4,
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];


const ReviewsProfileScreen = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 5 }}>

    <FlatList
      data={Posts}
      renderItem={({ item }) => <ReviewCard item={item} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  </View>
  )
}


export default ReviewsProfileScreen

import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Container } from '../../styles/DahaStyles';
import ReviewCard from '../../components/ReviewCard';
import { AntDesign, Entypo } from '@expo/vector-icons';





const Posts = [
  {
    id: '1',
    userName: 'Carmel L',
    userImg: require('../../assets/users/user-3.jpg'),
    post:
      'Nahum ruined my clothes',

  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/users/user-1.jpg'),
    post:
      'Wore his basketball jersey to ksig and felt sexy.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/users/user-4.jpg'),
    post:
      'Reasonable Pricing',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/users/user-6.jpg'),
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/users/user-7.jpg'),
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];


const ReviewsProfileScreen = () => {

  return (
    <Container>
      <FlatList
        data={Posts}
        renderItem={({ item }) => <ReviewCard item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}


export default ReviewsProfileScreen

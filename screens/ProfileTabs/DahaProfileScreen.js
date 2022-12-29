import React from 'react'
import { View, Text, FlatList } from 'react-native'
import DahaCard from '../../components/DahaCard';





const Posts = [
  {
    id: '1',
    userName: 'Nahum Maru',
    userImg: require('../../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    liked: true,
    likes: '14',
    comments: '5',

  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: false,
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: true,
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: true,

  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: false,
  },
];


const DahaProfileScreen = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 5 }}>

      <FlatList
        data={Posts}
        renderItem={({ item }) => <DahaCard item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default DahaProfileScreen

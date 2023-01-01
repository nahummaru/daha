import { Input } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Button, FlatList, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { Container } from '../styles/DawaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DawaCard from '../components/DawaCard'
import styled from 'styled-components';



const Posts = [
  {
    id: '1',
    userName: 'Nahum Maru',
    userImg: require('../assets/users/user-3.jpg'),
    postDist: '< 1 mi away',
    StateText: 'BUY: $26',
    postImg: require('../assets/users/user-3.jpg'),
    post: 'Live laugh love',
    liked: true,
    likes: '14',
    comments: '5',
    starred: true,

  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postDist: '1.2 mi away',
    StateText: 'FREE',
    postImg: require('../assets/users/user-1.jpg'),
    post: 'Lit crazy movie',
    bookmarked: false,
    starred: false,
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postDist: '< 1 mi away',
    StateText: 'BORROW: $15',
    postImg: require('../assets/users/user-4.jpg'),
    post:
      'go card',
    bookmarked: true,
    comments: '0',
    starred: true,
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postDist: '< 1 mi away',
    StateText: 'BUY: $26 RENT: $12',
    postImg: require('../assets/users/user-6.jpg'),
    post:
      '1loveie',
    bookmarked: true,
    starred: false,

  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postDist: '1.1 mi away',
    StateText: 'BUY: $10',
    postImg: require('../assets/users/user-7.jpg'),
    post:
      'road to 4k projector',
    bookmarked: false,
    starred: true,
  },
  {
    id: '6',
    userName: 'Nahum Maru',
    userImg: require('../assets/users/user-3.jpg'),
    postDist: '< 1 mi away',
    StateText: 'RENT: $20',
    postImg: require('../assets/users/user-3.jpg'),
    post: 'Live laugh love',
    liked: true,
    likes: '14',
    comments: '5',
    starred: false,
  },
];


const DawaScreen = () => {
  /*<View>
  <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
  </View>*/
  return (
    //<Container>
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 5 }}>

      <FlatList
        numColumns={2}
        key={2}
        data={Posts}
        renderItem={({ item }) => <DawaCard item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>

    //</Container>
  )
}

export default DawaScreen

/*const DawaScreen = () => {
  return (
    <Text>dawa!!</Text>
  )
}

export default DawaScreen*/

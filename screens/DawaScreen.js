import { Input } from '@rneui/themed'
import React, { useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Button, FlatList, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { Container } from '../styles/DawaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DawaCard from '../components/DawaCard'
import styled from 'styled-components';

import { doc, onSnapshot, collection, getDocsFromServer, getDocs } from "firebase/firestore";
import { AuthenticatedUserContext } from '../App.js';
import { db } from '../config/firebase.js';
import useState from 'react-usestateref'
import { format } from 'date-fns';

// sets up db reference to 'dahas' collection
const dbRefDahas = collection(db, "dawas");
const dbRefUsers = collection(db, "users");



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

  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const list = [];
  const [posts, setPosts, postsReff] = useState([]);

  useEffect(() => {
    // get info user info
    fetchPosts();
  }, []);


  // we can start keeping track of what has been bookmared
  const fetchUserInfo = async () => {
    // create a object of userInfo to be accessed when fetching posts
    const docsSnap = await getDocs(dbRefUsers);
    const users = {};
    docsSnap.forEach(doc => {
      const { uidUser, username, timeCreated, profilePic } = doc.data();
      users[uidUser] = {
        username: username,
        timeCreated: timeCreated,
        profilePic: profilePic
      }
    })
    return users
  }

  const fetchPosts = async () => {
    const userInfo = await fetchUserInfo();
    //console.log(userInfo)

    onSnapshot(dbRefDahas, docsSnap => {
      docsSnap.forEach(doc => {
        const { itemCategory, postTime, uidUser, listType, price, itemName, itemCondition, image, description } = doc.data();
        console.log('================')
        console.log(uidUser)
        
        console.log(userInfo[uidUser].username)
        list.push({
          //  FIX THIS: IT IS NOT A GOOD LONG TERM FIX -- WHY IS THERE DUPLICATE DOC.IDs?. THIS COULD MEAN DUPLICATE POSTS BEING RENDER -- HOWEVER COULD ALSO JUST A WARNING WE CAN IGNORE
          // id; doc.id,
          id: list.length,
          userName: userInfo[uidUser].username,
          itemName: itemName,
          listType: listType,
          price: price,
          userImg: require('../assets/users/user-7.jpg'),
          postTime: postTime.toDate(),
          itemCategory: itemCategory,
          itemCondition: itemCondition,
          // needByDate: needByDate,
          // returnByDate: returnByDate,
          description: description,
          postTime: postTime.toDate(),

        });
      });

      // sorts posts with newest on the top
      let sortedPosts = list.sort(
        (p1, p2) => (p1.postTime.getTime() < p2.postTime.getTime()) ? 1 : (p1.postTime.getTime() > p2.postTime.getTime()) ? -1 : 0);

      //  let v = sortedPosts[1].needByDate
      // let x = sortedPosts[1].returnByDate

      // const f = format(new Date(v), "LLLL Ko, hbb")
      // const d = format(v, "LLLL Ko, hbb")
      //console.log(v)
      //console.log(f)
      //console.log(d)

      console.log(sortedPosts)
      console.log(sortedPosts.length)

      // console.log(sortedPosts[1])
      setPosts(sortedPosts);
    });

    if (loading) {
      setLoading(false);
    }
  }
  return (
    //<Container>
    <FlatList
      numColumns={2}
      key={2}
      data={Posts}
      renderItem={({ item }) => <DawaCard item={item} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
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

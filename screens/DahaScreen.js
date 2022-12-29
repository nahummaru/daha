import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, SkeletonPlaceholder, FlatList } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { Container } from '../styles/DahaStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DahaCard from '../components/DahaCard'
import { doc, onSnapshot, collection, getDocsFromServer, getDocs } from "firebase/firestore";
import { AuthenticatedUserContext } from '../App.js';
import { db } from '../config/firebase.js';
import { set } from '@firebase/database';
import useState from 'react-usestateref'


const fakePosts = [
  {
    id: '1',
    userName: 'Nahum Maru',
    userImg: require('../assets/users/user-3.jpg'),
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
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: false,
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: true,
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: true,

  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    bookmarked: false,
  },
];

const dbRefDahas = collection(db, "dahas");




// query for all the posts
const DahaScreen = () => {

  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const list = [];
  const [posts, setPosts, postsReff] = useState([]);

  useLayoutEffect(() => {
    fetchPosts();
    console.log('GOD PLZ HELP ME I WANNA KMS')
  }, []);


  const fetchPosts = async () => {
    onSnapshot(dbRefDahas, docsSnap => {
      docsSnap.forEach(doc => {
        const { postText, postTime, uidUser } = doc.data();
        list.push({
          id: doc.id,
          userName: uidUser,
          userImg: require('../assets/users/user-7.jpg'),
          postTime: '2 days ago',
          post: postText,
          bookmarked: false,
        });
      });

      setPosts(list);
      console.log('this is posts')
      console.log(posts)
      console.log(postsReff.current)
      console.log(list)
    });
    
    if (loading) {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Text>hello</Text>
      ) : (
        <Container>
          <FlatList
            data={postsReff.current}
            renderItem={({ item }) => console.log('hello what in the world') && console.log(posts) &&
              <DahaCard item={item} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      )}
    </SafeAreaView>
  );
}

export default DahaScreen

import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, SkeletonPlaceholder, StyleSheet, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DahaCard from '../components/DahaCard'
import { doc, onSnapshot, collection, getDocsFromServer, getDocs } from "firebase/firestore";
import { AuthenticatedUserContext } from '../App.js';
import { db } from '../config/firebase.js';
import useState from 'react-usestateref'

// sets up db reference to 'dahas' collection
const dbRefDahas = collection(db, "dahas");

// query for all the posts
const DahaScreen = () => {

  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const list = [];
  const [posts, setPosts, postsReff] = useState([]);

  useEffect(() => {
    // get info user info
    fetchPosts();
  }, []);

  // ORDER POSTS BY MOST RECENT, ADD CATEGORIES TO DAHAS

  // 
  const fetchPosts = async () => {
    onSnapshot(dbRefDahas, docsSnap => {
      docsSnap.forEach(doc => {
        const { postText, postTime, uidUser } = doc.data();
        list.push({
          //  FIX THIS: IT IS NOT A GOOD LONG TERM FIX -- WHY IS THERE DUPLICATE DOC.IDs?
          // THIS COULD MEAN DUPLICATE POSTS BEING RENDER -- HOWEVER COULD ALSO JUST A WARNING WE CAN IGNORE
          // id; doc.id,
          id: list.length,
          userName: uidUser,
          userImg: require('../assets/users/user-7.jpg'),
          postTime: '2 days ago',
          post: postText,
          bookmarked: true,
        });
      });

      setPosts(list);
    });

    if (loading) {
      setLoading(false);
    }
  }
  // ADD A LOADING SCREEN 
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 5 }}>
      <FlatList
        data={postsReff.current}
        renderItem={({ item }) => {
          console.log(item)
          return (<DahaCard item={item} />)
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>

  )
}

export default DahaScreen

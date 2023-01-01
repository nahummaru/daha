import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, SkeletonPlaceholder, StyleSheet, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DahaCard from '../components/DahaCard'
import { doc, onSnapshot, collection, getDocsFromServer, getDocs } from "firebase/firestore";
import { AuthenticatedUserContext } from '../App.js';
import { db } from '../config/firebase.js';
import useState from 'react-usestateref'
import { format } from 'date-fns';

// sets up db reference to 'dahas' collection
const dbRefDahas = collection(db, "dahas");
const dbRefUsers = collection(db, "users");

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
        const { postText, postTime, uidUser, needByDate, returnByDate } = doc.data();
        list.push({
          //  FIX THIS: IT IS NOT A GOOD LONG TERM FIX -- WHY IS THERE DUPLICATE DOC.IDs?. THIS COULD MEAN DUPLICATE POSTS BEING RENDER -- HOWEVER COULD ALSO JUST A WARNING WE CAN IGNORE
          // id; doc.id,
          id: list.length,
          userName: userInfo[uidUser].username,
          userImg: require('../assets/users/user-7.jpg'),
          postTime: postTime.toDate(),
          post: postText,
          needByDate: needByDate,
          returnByDate: returnByDate,
          bookmarked: true,
        });
      });

      // sorts posts with newest on the top
      let sortedPosts = list.sort(
        (p1, p2) => (p1.postTime.getTime() < p2.postTime.getTime()) ? 1 : (p1.postTime.getTime() > p2.postTime.getTime()) ? -1 : 0);
      let v = sortedPosts[1].needByDate
      let x = sortedPosts[1].returnByDate

      const f = format(new Date(v), "LLLL Ko, hbb")
      const d = format(v, "LLLL Ko, hbb")
      //console.log(v)
      //console.log(f)
      //console.log(d)

      
      // console.log(sortedPosts[1])
      setPosts(sortedPosts);
    });

    if (loading) {
      setLoading(false);
    }
  }

  // ADD A LOADING SCREEN??
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 5 }}>
      <FlatList

        data={postsReff.current}
        renderItem={({ item }) => {
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

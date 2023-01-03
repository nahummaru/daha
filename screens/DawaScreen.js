import React, { useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Button, FlatList, TouchableOpacity } from 'react-native'
import DawaCard from '../components/DawaCard'
import { doc, onSnapshot, collection, getDocsFromServer, getDocs } from "firebase/firestore";
import { AuthenticatedUserContext } from '../App.js';
import { db } from '../config/firebase.js';
import useState from 'react-usestateref'

// sets up db reference to collections in firebase
const dbRefDahas = collection(db, "dawas");
const dbRefUsers = collection(db, "users");


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
        const { itemCategory, postTime, uidUser, listType, price, itemName, itemCondition, itemImage, description } = doc.data();
        // console.log('================')
        // console.log(uidUser)

        // console.log(userInfo[uidUser].username)
        // get the profile pic of the poster

        list.push({
          //  FIX THIS: IT IS NOT A GOOD LONG TERM FIX -- WHY IS THERE DUPLICATE DOC.IDs?. THIS COULD MEAN DUPLICATE POSTS BEING RENDER -- HOWEVER COULD ALSO JUST A WARNING WE CAN IGNORE
          // id; doc.id,
          id: list.length,
          userName: userInfo[uidUser].username,
          itemName: itemName,
          listType: listType,
          price: price,
          postTime: postTime.toDate(),
          itemCategory: itemCategory,
          itemCondition: itemCondition,
          // needByDate: needByDate,
          // returnByDate: returnByDate,
          description: description,
          postTime: postTime.toDate(),
          itemImage: itemImage

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
      columnWrapperStyle={{ justifyContent: 'space-between', }}
      data={posts}
      renderItem={({ item }) =>
        <View style={{ flex: .5, }}>
          <DawaCard item={item} />
        </View>}
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

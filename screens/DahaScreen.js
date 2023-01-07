import React, { useContext, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  SkeletonPlaceholder,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DahaCard from "../components/DahaCard";
import {
  doc,
  onSnapshot,
  collection,
  getDocsFromServer,
  getDocs,
} from "firebase/firestore";
import { AuthenticatedUserContext } from "../App.js";
import { db } from "../config/firebase.js";
import useState from "react-usestateref";
import { format } from "date-fns";

// sets up db reference to 'dahas' collection
const dbRefDahas = collection(db, "dahas");
const dbRefUsers = collection(db, "users");

// query for all the posts
const DahaScreen = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const list = [];

  // represents the posts we get intially and will display if nothing is searched
  const [masterPosts, setMasterPosts] = useState([]);

  // the posts we display
  const [posts, setPosts] = useState([]);
  const [filteredPosts, , setFilteredPosts] = useState([]);

  useEffect(() => {
    // get info user info
    fetchPosts();
  }, []);

  // we can start keeping track of what has been bookmared
  const fetchUserInfo = async () => {
    // create a object of userInfo to be accessed when fetching posts
    const docsSnap = await getDocs(dbRefUsers);
    const users = {};
    docsSnap.forEach((doc) => {
      const { uidUser, username, timeCreated, profilePic } = doc.data();
      users[uidUser] = {
        username: username,
        timeCreated: timeCreated,
        profilePic: profilePic,
      };
    });
    return users;
  };

  const sortPostsByDate = (unSortedPosts) => {
    // sorts posts with newest on the top
    return unSortedPosts.sort((p1, p2) =>
      p1.postTime.getTime() < p2.postTime.getTime()
        ? 1
        : p1.postTime.getTime() > p2.postTime.getTime()
        ? -1
        : 0
    );
  };
  const fetchPosts = async () => {
    const userInfo = await fetchUserInfo();

    // console.log(userInfo)
    //console.log(userInfo)

    onSnapshot(dbRefDahas, (docsSnap) => {
      docsSnap.forEach((doc) => {
        const { postText, postTime, uidUser, needByDate, returnByDate } =
          doc.data();
        // console.log('-------------')
        // console.log(uidUser)
        // console.log(userInfo[uidUser].username)

        list.push({
          //  FIX THIS: IT IS NOT A GOOD LONG TERM FIX -- WHY IS THERE DUPLICATE DOC.IDs?. THIS COULD MEAN DUPLICATE POSTS BEING RENDER -- HOWEVER COULD ALSO JUST A WARNING WE CAN IGNORE
          // id; doc.id,
          id: list.length,
          userName: userInfo[uidUser].username,
          postTime: postTime.toDate(),
          post: postText,
          needByDate: needByDate,
          returnByDate: returnByDate,
          bookmarked: true,
          profilePic: userInfo[uidUser].profilePic,
        });
      });

      let sortedPosts = sortPostsByDate(list);
      setMasterPosts(sortedPosts);
      setPosts(sortedPosts);
    });

    if (loading) {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    // value is what was searched for
    console.log(text);
    console.log(posts);

    // if nothing was entered, do nothing
    if (!text.length) {
      setPosts(masterPosts);
      return;
    }

    const filteredPosts = posts.filter((item) => {
      console.log("======" + item.post + "-----" + text);
      return item.post.toLowerCase().includes(text.toLowerCase());
    });
    if (filteredPosts.length) {
      console.log("FOUND " + filteredPosts.length + "");
      setPosts(filteredPosts);
    } else {
      console.log("FOUND NONE");
      setPosts(masterPosts);
    }
  };

  // ADD A LOADING SCREEN??
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: 5,
      }}
    >
      <FlatList
        style={{}}
        data={posts}
        renderItem={({ item }) => {
          return <DahaCard item={item} />;
        }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ justifyContent: "center", backgroundColor: "#a5353a" }}>
        <TextInput
          style={styles.input}
          placeholder="Does anyone have a..."
          autoCapitalize="none"
          autoFocus={true}
          // value={firstName}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
    </View>
  );
};

export default DahaScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#E28F8F",
    height: 45,
    marginVertical: 12,
    marginHorizontal: 10,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
});

import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AuthenticatedUserContext } from "../../App";
import DahaCard from "../../components/DahaCard";
import { db } from "../../config/firebase";
import useState from "react-usestateref";
import {
  doc,
  onSnapshot,
  collection,
  getDocsFromServer,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import PostStack from "../../navigator/PostStack";

// sets up db reference to 'dahas' collection
const dbRefDahas = collection(db, "dahas");
const dbRefUsers = collection(db, "users");

const DahaProfileScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const list = [];
  const [posts, setPosts, postsReff] = useState([]);
  // const [userInfo, setUserInfo, UserInfoReff] = useState(null);

  // const [profilePic, setProfilePic] = useState(null);
  // const [user, setProfilePic] = useState(null);

  useEffect(() => {
    // get info user info
    fetchPosts();
  }, []);

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
  // ORDER POSTS BY MOST RECENT, ADD CATEGORIES TO DAHAS
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
      //console.log(users)
    });
    return users;
  };

  const fetchPosts = async () => {
    const userInfo = await fetchUserInfo();

    const q = query(dbRefDahas, where("uidUser", "==", user.uid)); // orderBy("field2", "asc")

    onSnapshot(q, (docsSnap) => {
      docsSnap.forEach((doc) => {
        const { postText, postTime, uidUser, needByDate, returnByDate } =
          doc.data();
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

      // sorts posts with newest on the top
      const sortedPosts = sortPostsByDate(list);
      //console.log('yooooo')
      //console.log(sortedPosts)
      setPosts(sortedPosts);
    });

    if (loading) {
      setLoading(false);
    }
  };

  if (posts.length > 0) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5,
        }}
      >
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return <DahaCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 40,
            color: "#a5353a",
          }}
        >
          {" "}
          You haven't posted any dahas yet!{" "}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            {" "}
            Post a daha or dawa!!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a5353a",
    height: 58,
    width: "60%",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default DahaProfileScreen;

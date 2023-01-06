import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DawaCard from "../components/DawaCard";
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

// sets up db reference to collections in firebase
const dbRefDahas = collection(db, "dawas");
const dbRefUsers = collection(db, "users");

const DawaScreen = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  const list = [];
  // represents the posts we get intially and will display if nothing is searched
  const [masterPosts, setMasterPosts] = useState([]);

  // the posts we display
  const [posts, setPosts] = useState([]);

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
    //console.log(userInfo)

    onSnapshot(dbRefDahas, (docsSnap) => {
      docsSnap.forEach((doc) => {
        const {
          itemCategory,
          postTime,
          uidUser,
          listType,
          price,
          itemName,
          itemCondition,
          itemImage,
          description,
        } = doc.data();
        // console.log('================')
        // console.log(uidUser)

        // console.log(userInfo[uidUser].username)
        // get the profile pic of the poster

        list.push({
          //  FIX THIS: IT IS NOT A GOOD LONG TERM FIX -- WHY IS THERE DUPLICATE DOC.IDs?. THIS COULD MEAN DUPLICATE POSTS BEING RENDER -- HOWEVER COULD ALSO JUST A WARNING WE CAN IGNORE
          // id; doc.id,
          id: list.length,
          userName: userInfo[uidUser].username,
          uidUser: uidUser,
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
          itemImage: itemImage,
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

  const handleSearch = (searchText) => {

    // if nothing was entered, do nothing
    if (!searchText.length) {
      setPosts(masterPosts);
      return;
    }

    // parses through the name
    const filteredPosts = posts.filter((item) => {
      return item.itemName.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase());
    });
    
    if (filteredPosts.length) {
      console.log("FOUND " + filteredPosts.length + " posts");
      setPosts(filteredPosts);
    } else {
      console.log("FOUND NONE");
      setPosts(masterPosts);
    }
  };
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
        numColumns={2}
        key={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={posts}
        renderItem={({ item }) => (
          <View style={{ flex: 0.5 }}>
            <DawaCard item={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ justifyContent: "center", backgroundColor: "#a5353a" }}>
        <TextInput
          style={styles.input}
          placeholder="Does anyone want a..."
          autoCapitalize="none"
          autoFocus={true}
          // value={firstName}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
    </View>
  );
};

export default DawaScreen;

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

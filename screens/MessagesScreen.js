import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo
} from "@expo/vector-icons";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";

const MessagesScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "sup",
    });
  }, []);

  return (
    
    <View style={styles.container}>
      <ScrollView>
      <SafeAreaView style={styles.form}>
        <Image
          source={require("../assets/logo2.png")}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: '3%'
          }}
        />

        <Text style={styles.itemTitle}> Multi Million Dollar Company</Text>
        <View style={{flexDirection:'row', marginBottom: '5%', marginTop: '5%'}}>
        <Text style={styles.pricingTitle}> BUY </Text>
        <Text style={styles.pricingNumber}> $26,000,000 </Text>
        </View>

        <View style={{flexDirection:'row', marginBottom: '2.5%'}}>
        <Ionicons
                name="ios-pin-sharp"
                size={24}
                color="#a5353a"
              /> 
        <Text style={styles.infoTitle}> 1.5 mi </Text>
          </View>

          <View style={{flexDirection:'row', marginBottom: '2.5%'}}>
        <Entypo
                name="stopwatch"
                size={24}
                color="#a5353a"
              /> 
        <Text style={styles.infoTitle}>  3 weeks ago </Text>
          </View>

          <View style={{flexDirection:'row', marginBottom: '7%'}}>
        <MaterialCommunityIcons
                name="lightning-bolt"
                size={24}
                color="#a5353a"
              /> 
        <Text style={styles.infoTitle}>  NEW </Text>
          </View>
        <Text style={{lineHeight: 25}}>
        A group of college students at a prestigious university had 
        a vision to create a technology company that would revolutionize the industry. 
        They poured all of their time and energy into developing a unique product and 
        creating a solid business plan. After countless late nights and hard work, their efforts
        paid off when they secured a significant amount of funding from venture capitalists. 
        The company quickly gained traction and was able to turn a profit in its first year. 
        As word of their innovative product spread, demand for it skyrocketed, leading to
         exponential growth for the company. Within a few short years, the group of college 
         students had turned their dream into a multi million dollar company, becoming overnight success
          stories and inspiring other young entrepreneurs to follow in their footsteps. 
        </Text>

        <View style={{marginTop: '5%', flexDirection: 'row', marginBottom: '5%'}}>
        <Avatar.Image source={require("../assets/logo2.png")} size={70} />
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf:'center', marginLeft: '3%',}}> Team DAHA </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: '4%'}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#a5353a'}}> REVIEWS </Text>
        <TouchableOpacity>
        <Text style={{fontSize: 15, fontWeight: 'normal', alignSelf:'center', textDecorationLine:'underline', color: '#a5353a'}}> Read Reviews </Text>
        </TouchableOpacity>
        </View>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: '#a5353a', marginBottom: '20%'}}> 5.0 </Text>


      </SafeAreaView>
    </ScrollView>
    <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
          {" "}
          MESSAGE SELLER
        </Text>
      </TouchableOpacity>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#a5353a",
    alignSelf: "center",
    paddingBottom: 24,
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#a5353a",
    alignSelf: "left",
    marginTop: '10%'
  },
  pricingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "left",
    marginTop: '1%'
  },
  pricingNumber: {
    fontSize: 20,
    fontWeight: "normal",
    color: "black",
    alignSelf: "left",
    marginTop: '1%'
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    alignSelf: "left",
    marginTop: '1%'
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#a5353a",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#a5353a",
    //opacity: '50%',
    height: 60,
    width: "60%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: '5%',
    marginTop: '3%'
  },
});
export default MessagesScreen;

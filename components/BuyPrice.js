import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, useState} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Timestamp, toDate } from 'firebase/firestore';
import TimeAgo from '@andordavoti/react-native-timeago';
import { format } from 'date-fns';
import moment from 'moment';

const BuyPrice= () => {
  
  //setSelectedDate(moment(item.needByDate).format('DD-MM-YYYY hh:mm A'));

  return (


<View style={{flex: 1}}>
    <Text style={styles.priceType}> BUY PRICE </Text>
    <View style={{flexDirection: 'row', marginLeft: 5, alignItems: 'center'}}>
          <FontAwesome name={"dollar"} size={20} color="#a5353a" />
            <TextInput
              style={styles.priceInput}
              autoCapitalize="none"
              keyboardType="number"
              autoFocus={true}
              onChangeText={newText => setItemPrice(newText)}  />
              </View>
              </View>

  )
}

export default BuyPrice

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexShrink: 1,
      backgroundColor: "#fff",
      flexDirection: 'row',
      justifyContent: 'center'
    },
  
    item: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      top: 30,
      paddingBottom: 20,
    },
    photo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 15,
      paddingBottom: 12,
    },
  
    category: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 30,
      marginBottom: 10,
    },
  
    listingType: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 25,
      marginBottom: 10
    },
    priceType: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 10,
      marginBottom: 10,
    },
  
    itemInput: {
      backgroundColor: "#F6F7FB",
      height: 48,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
      marginBottom: 10,
      marginTop: 20
    },
  
    photoInput: {
      backgroundColor: "#F6F7FB",
      height: 50,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 10,
    },
  
    whiteSheet: {
      width: '100%',
      height: '75%',
      position: "absolute",
      bottom: 0,
      backgroundColor: '#fff',
      borderTopLeftRadius: 60,
    },
    form: {
      flex: 1,
      justifyContent: 'top',
      marginHorizontal: 30,
    },
    button: {
      position: 'absolute',
      bottom: 10,
      backgroundColor: "#a5353a",
      height: 58,
      width: '90%',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
  
    iconButton: {
      backgroundColor: "#F6F7FB",
      height: 40,
      width: 40,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      bottomMargin: 10,
      padding: 12,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  
    condition: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 20,
    },
    newButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
  
    usedButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -38,
      right: -90,
    },
  
    buyButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: -35,
      left: 87,
      bottom: 38,
    },
  
    rentButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
    },
  
    freeButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -38,
      right: -175
    },
  
    borrowButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -38,
      right: -260
    },
  
    priceInput: {
      backgroundColor: "#F6F7FB",
      height: 48,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
      marginTop: 0,
      width: '20%',
      marginBottom: '1%',
      marginLeft: 5,
    },
  
    descriptionHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 20
    },
  
    descriptionInput: {
      backgroundColor: "#F6F7FB",
      height: 100,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
      marginTop: 10,
      marginBottom: 20,
      flexWrap: "wrap",
      overflow: "scroll",
      flexShrink: 1
    },
  
    deliveryTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      alignSelf: "left",
      marginTop: 20,
      marginBottom: 10
    },
  
    pickUpButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    dropOffButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      marginBottom: 100,
      left: 87,
      top: -38
    },
  
  });


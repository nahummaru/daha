import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Alert, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Apparel', value: '1'},
  { label: 'Tech', value: '2'},
  { label: 'Dorm Essentials', value: '3'},
  { label: 'Other', value: '4'},
];


function AddDawaScreen() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [buttonColor, setButtonColor] = useState('transparent');
  
  const IconButton = ({onPress, icon }) => (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );

  const [image,setImage]=useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing:true
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } 
  };

  return (
    <View style={styles.container}>

      <View style={styles.whiteSheet} />
      <ScrollView style={styles.ScrollView}>
      <SafeAreaView style={styles.form}>
        <Text style={styles.item}> ITEM NAME </Text>
        <TextInput
          style={styles.itemInput}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true} />

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}> List it!</Text>
        </TouchableOpacity>

        <Text style={styles.photo}> ADD A PHOTO </Text>

        <StatusBar hidden={true} />
        {image && <Image source={{uri:image}} style={{width:100,height:100}} />} 
        <IconButton
        onPress={pickImage}
        icon={<Ionicons name={"add"} size={20} color="#a5353a" style={{top: -2.5, right: 1}} />}
/>
        <StatusBar style="auto" />

        <Text style={styles.category}> CATEGORY </Text>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

      <Text style={styles.condition}> CONDITION </Text>

      <TouchableOpacity style={[styles.newButton, {backgroundColor: buttonColor}]}
         >
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 10 }}>NEW</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.usedButton, {backgroundColor: buttonColor}]}
         >
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 10 }}>USED</Text>
      </TouchableOpacity>

      <Text style={styles.listingType}> LISTING TYPE </Text>

      <TouchableOpacity style={[styles.buyButton, {backgroundColor: buttonColor}]}
         >
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 10 }}>RENT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rentButton, {backgroundColor: buttonColor}]}
         >
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 10 }}>BUY</Text>
      </TouchableOpacity>

      <Text style={styles.listingType}> PRICE </Text>
      <TextInput
          style={styles.priceInput}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true} />

      <Text style={styles.listingType}> DESCRIPTION </Text>
      <TextInput
          style={styles.priceInput}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true} />

      


      </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "left",
    marginTop: 30,
    paddingBottom: 12,
  },
  photo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "left",
    marginTop: -550,
    paddingBottom: 12,
  },

  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "left",
    top: -20
  },

  listingType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "left",
    top: 20
  },

  itemInput: {
    backgroundColor: "#F6F7FB",
    height: 48,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },

  photoInput: {
    backgroundColor: "#F6F7FB",
    height: 78,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
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
    //position: 'absolute',
    flexGrow: 1,
    //justifyContent: 'flex-end',
    backgroundColor: "#a5353a",
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
  },

  iconButton: {
    backgroundColor: "#F6F7FB",
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    right: -150,
    top: -43
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
        paddingVertical:30,
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        alignSelf: "left",
    },
    newButton: {
        borderColor: 'black',
        borderWidth: 1,
        height: 38,
        width: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -15,
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
      marginTop: 30,
      right: -87,
    },

    rentButton: {
      borderColor: 'black',
      borderWidth: 1,
      height: 38,
      width: 80,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -38,
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
  marginBottom: 150,
  fontSize: 16,
  borderRadius: 10,
  padding: 12,
  bottom: -30,
},

    
})

export default AddDawaScreen

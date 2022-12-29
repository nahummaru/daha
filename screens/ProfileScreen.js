import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
//import { auth } from '../config/firebase';
import { getAuth, signOut } from "firebase/auth";
import { AntDesign, Entypo } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Settings from './SettingsScreen';
import { AuthenticatedUserContext } from '../App';
import ProfileTopTabNavigator from '../navigator/ProfileTopTabNavigator';
import { Touchable } from 'react-native-web';
//import * as ImagePicker from 'expo-image-picker';



// we should pass in the user and populate the page with their specifc stuff

const auth = getAuth();

const ProfileScreen = () => {
    const navigation = useNavigation();
    const {user, setUser} = useContext(AuthenticatedUserContext);

    console.log(user)

    //const [image, setImage] = useState(null);

    /*const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
  
    };*/


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity >
                    <Avatar.Image 
                        //source={{
                          //  uri: 
                        //}}
                        size={100}
                    />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>nahummaru</Title>
                        <Stars
                            default={2.5}
                            count={5}
                            half={true}
                            starSize={120}


                            fullStar={<Entypo name={'star'} style={[styles.myStarStyle]} />}
                            emptyStar={<Entypo name={'star'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Entypo name={'star'} style={[styles.myStarStyle]} />}
                        />
                    </View>
                </View>
                <Text>This is the UID: {user.uid}</Text>
            </View>


            <ProfileTopTabNavigator>
                <Text>hello</Text>
            </ProfileTopTabNavigator>


        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    myStarStyle: {
        color: '#FFFF66',

        backgroundColor: 'transparent',

        textShadowRadius: 0,
        borderRadius: 5
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});

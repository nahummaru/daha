import { useNavigation } from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
//import { auth } from '../config/firebase';
import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { Button, SafeAreaView,ScrollView, Text, View, TouchableOpacity } from 'react-native'
import {useTailwind} from 'tailwind-rn';


const auth = getAuth();

const MessagesScreen = ({}) => {
    const tailwind = useTailwind();
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 15
                }}
                    onPress={ signOutFunction }
                >
                    <AntDesign name="logout" size={24} color="white" />
                </TouchableOpacity>
            )
        })
    }, [])
    const signOutFunction = () => {
        signOut(auth).then(() => {
            navigation.replace('LoginScreen')
        }).catch((error) => {
            //an error happened
        });
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <Text style={tailwind('font-semibold')}>
                    This is the Profile screen
                </Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default MessagesScreen

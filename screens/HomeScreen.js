import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useEffect, useContext } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import TopTabNavigator from '../navigator/TopTabNavigator';
import { AuthenticatedUserContext } from '../App';
import { UserInfoContext } from '../App';
import { db } from '../config/firebase';
import { getDoc, doc } from '@firebase/firestore';

const HomeScreen = () => {
    const navigation = useNavigation();
    const tailwind = useTailwind();
    const { user } = useContext(AuthenticatedUserContext);
    const { userInfo, setUserInfo } = useContext(UserInfoContext)
    const docRef = doc(db, "users", user.uid);


    const fetchUserInfo = async () => {
        try {
            const docSnap = await getDoc(docRef);
            const data = docSnap.data()
            return data
            //setUserInfo(data);
        } catch (error) {
            console.log('error', error)
        }
    }

    // will place user data in Context
    useEffect(() => {
        const contextUserInfo = async () => {
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data()
                setUserInfo(data)
            } catch (error) {
                console.log('error', error)
            }
        }
        contextUserInfo();
    }, [])


    // this modifies the home page to say "Stanford" rather than "Home"
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Stanford",
        })
    }, []);

    return (
        <TopTabNavigator> </TopTabNavigator>
    )
}

export default HomeScreen


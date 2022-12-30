import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useEffect, useContext } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import TopTabNavigator from '../navigator/TopTabNavigator';
import { AuthenticatedUserContext } from '../App';

const HomeScreen = () => {
    const navigation = useNavigation();
    const tailwind = useTailwind();
    const { user } = useContext(AuthenticatedUserContext);

    // this modifies the home page to say "Stanford" rather than "Home"
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Stanford",
        })
    }, []);

    return (
        <TopTabNavigator>
            
        </TopTabNavigator>
    )
}

export default HomeScreen


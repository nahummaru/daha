import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useContext } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from '../navigator/TopTabNavigator';
import { user } from '../App';
import { Input } from '@rneui/themed';



const HomeScreen = () => {
    const navigation = useNavigation();
    const tailwind = useTailwind();

    // this modifies the home page to say "Stanford" rather than "Home"
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Stanford",
        })
    }, []);

    return (
        <TopTabNavigator>
            <ScrollView>
                <SafeAreaView >
                    <Text style={tailwind('font-semibold')}>
                        Welcome to the home screen of daha
                    </Text>
                    <Button
                        title="Go to the Messages screen"
                        onPress={() => navigation.navigate("Messages")}
                    />
                </SafeAreaView>
            </ScrollView>
        </TopTabNavigator>


    )
}

export default HomeScreen


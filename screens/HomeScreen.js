import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useContext } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import TopTabNavigator from '../navigator/TopTabNavigator';
import { AuthenticatedUserContext } from '../App';



const HomeScreen = () => {
    const navigation = useNavigation();
    const tailwind = useTailwind();
    const {user, setUser} = useContext(AuthenticatedUserContext);

    console.log(user)





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


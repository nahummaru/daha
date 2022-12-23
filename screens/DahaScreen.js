import { Input } from '@rneui/themed'
import React from 'react'
import { View, Text, ScrollView, SafeAreaView, Button } from 'react-native'
import { useTailwind } from 'tailwind-rn'


const DahaScreen = () => {
  const tailwind = useTailwind();

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={tailwind('font-semibold')}>
          fuck to the home screen of daha
        </Text>
      </SafeAreaView>
    </ScrollView>
  )
}

export default DahaScreen

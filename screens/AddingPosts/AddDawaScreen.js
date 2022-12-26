import React from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'


const AddDawaScreen = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Item Name </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Does anyone want a..."

          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <Text style={styles.title}>Add a photo </Text>

        <Text>SPACE FOR THE UPLOAD A PHOTO FEATURE</Text>


        <Text style={styles.title}>Category</Text>

        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
        <Text style={styles.title}> Description </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <TouchableOpacity style={styles.button} >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}> Post it!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "left",
    marginTop: 30,
    paddingBottom: 12,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
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
    backgroundColor: "#a5353a",
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})

export default AddDawaScreen

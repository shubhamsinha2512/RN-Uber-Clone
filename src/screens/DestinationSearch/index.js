import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import {GooglePlacesAutocomplete} from  'react-native-google-places-autocomplete';

const DestinationSearch = () => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.textInput} onChangeText={setFrom} value={from} placeholder='From...' />
                <TextInput style={styles.textInput} onChangeText={setTo} value={to} placeholder='Where To...' />

                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                      // 'details' is provided when fetchDetails = true
                      console.log(data, details);
                    }}
                    query={{
                      key: 'AIzaSyBAJfqsXRJh4zvJjklDbUBAOMO_J3j1TYw',
                      language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'#eee',
        height:'100%'
    },
    textInput: {
        paddingHorizontal:10,
        paddingVertical:6,
        backgroundColor:'#ddd',
        marginVertical:5
    }

});

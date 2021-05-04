import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Travel only if necessary!</Text>
 
            <Text style={styles.text} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisi eget magna scelerisque fermentum vel ac mauris.
            </Text>
 
            <Text style={styles.learnMore} >Learn more</Text>
        </View>
    )
}

export default CovidMessage

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1065e9',
        padding:15,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title: {
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginBottom: 10
    },
    text: {
        color: '#bed9ff',
        fontSize: 15,
        marginBottom: 10,
        paddingRight:50
    },
    learnMore: {
        color:'#fff',
        fontSize:15,
        fontWeight: 'bold'
    }
})

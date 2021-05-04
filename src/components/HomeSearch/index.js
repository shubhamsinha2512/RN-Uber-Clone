import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeSearch = () => {
    return (
        <View>
            <View style={styles.inputBox}>
                <TextInput style={styles.inputText} placeholder='Where to?'/>

                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <AntDesign name={'down'} size={16} />
                </View>

            </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} />
                </View>
                <Text style={styles.destinationText}>Spin Nighclub</Text> 
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor:'#218cff'}]}>
                    <AntDesign name={'home'} size={16} color={'#ffffff'} />
                </View>
                <Text style={styles.destinationText}>Home</Text> 
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor:'#d4af37'}]}>
                    <AntDesign name={'star'} size={16} color={'#ffffff'} />
                </View>
                <Text style={styles.destinationText}>Rewards</Text> 
            </View>

        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor:'#b0b0b0',
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        paddingVertical:4
    },
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color: '#6e6e6e'
    },
    timeContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:90,
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:20
    },
    row: {
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#dbdbdb'
    },
    iconContainer: {
        backgroundColor:'#b3b3b3',
        padding:10,
        borderRadius:25
    },
    destinationText: {
        marginLeft:10,
        fontWeight:'500',
        fontSize:16
    }
})

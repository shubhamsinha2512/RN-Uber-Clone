import React from 'react';
import {Text, View} from 'react-native';

import HomeMap from '../HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

function Home(){
    return(
        <View>
            <Text>Home</Text>
            <HomeMap />

            <CovidMessage />
            <HomeSearch />

            {/* Bottom Comp */}
        </View>
    );
}

export default Home;
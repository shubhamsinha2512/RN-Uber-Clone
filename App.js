import React from 'react';
import {StatusBar, View} from 'react-native';

import Home from './src/screens/Home'
import DestinationSearch from './src/screens/DestinationSearch'

function App(){
  return (
    <>
      <StatusBar barStyle='dark-content' />
      {/* <Home /> */}
      <DestinationSearch />
    </>
  );
}

export default App;

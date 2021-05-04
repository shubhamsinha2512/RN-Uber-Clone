import React from 'react';
import {StatusBar, View} from 'react-native';

import Home from './src/screens/Home'

function App(){
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Home />
    </>
  );
}

export default App;
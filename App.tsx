import React from "react"

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

function App(){
  return(
    <SafeAreaView>
    <View
    style={{
      flexDirection: 'column',
      height: 100,
      padding: 20,
    }}>
      <View style={{backgroundColor: '#E56717', flex: 0.5}}/>
      <View style={{backgroundColor: '#fff', flex: 0.5}}/>
      <View style={{backgroundColor: '#005F00', flex: 0.5}}/>
      <Text>
        Vande mataram !
        hello world !
      </Text>
    </View>
  </SafeAreaView>
  )
  
}

export default App;
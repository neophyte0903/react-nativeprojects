import React from "react"

import {View,
    Text, StyleSheet, useColorScheme
} from 'react-native'


function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === 'dark' //it is a react hook!
    return(
        <View style={styles.container} >
            <Text style={isDarkMode? styles.whiteText : styles.darkText}>
            hello world
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
         alignItems: "center",
          //it works for left and right alignment
          justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText:{
        color: '#000000'
    },
})

export default AppPro
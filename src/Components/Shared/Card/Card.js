import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('screen')
export default function Card(props) {
    return (
        <View style={[Style.card, props.style]}>
            {props.children}
        </View>
    )
}


const Style = StyleSheet.create({
    card: {
        // backgroundColor: WHITE,
        margin: 18,
        // width: width * 0.70,
        height: height * 0.27,
        shadowColor: "#000",
        borderRadius: 12,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 60.27,
        elevation: 10,
    }
})
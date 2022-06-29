import React from 'react'
import { View, Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'



const { width, height } = Dimensions.get('screen')
export default function Card(props) {
    return (
        <View style={[Style.card, props.style]}>
            {props.children}
        </View>
    )
}
// ScaledSheet.create

const Style = ScaledSheet.create({
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
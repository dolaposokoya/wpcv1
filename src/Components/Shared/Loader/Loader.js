import React, { useState, useEffect } from 'react'
import { View, Dimensions, ActivityIndicator } from 'react-native'
import { THEME_COLOR, THEME_COLOR_BACKGROUND } from '../../../Config/Config'


const { width, height } = Dimensions.get('screen')
export default function Loader(props) {

    const backgroundColor = 'rgba(0,0,0,0.7)'
    const [showText, setshowText] = useState(true)

    return (
        <View style={{
            position: 'absolute',
            zIndex: 9999999999999,
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            bottom: 0,
            left: 0,
            width,
            height,
        }}>
            <View style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: backgroundColor ? backgroundColor : '#00000',
                top: 0,
                bottom: 0,
                left: 0,
                width,
                height
            }}>
                <ActivityIndicator size="large" color={THEME_COLOR} />
            </View>
        </View>
    )
}

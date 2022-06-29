import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')
export default function AlignItem(props) {
    const { children, justify, align, backgroundColor, styles, itemWidth } = props
    return (
        <View style={[{
            justifyContent: justify ? justify : 'center',
            alignItems: align ? align : 'center',
            width: width
        }, styles]}>
            <View style={[, styles, {
                justifyContent: 'center',
                backgroundColor: backgroundColor ? backgroundColor : 'transparent',
                width: itemWidth ? itemWidth : width * 0.85
            }]}>
                {children}
            </View>
        </View>
    )
}

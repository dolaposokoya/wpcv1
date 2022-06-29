import React from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { THEME_COLOR_BACKGROUND_OPACITY, THEME_COLOR_BACKGROUND } from '../../../Config/Config';
import Styles from './Styles'
// import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('screen')

export default function BackDrop(props) {
    const { IMAGE_HEIGHT, COLOR_HEIGHT, IMAGE, LOGIN } = props
    return (
        <View style={Styles.backView}>
            <Image source={IMAGE}
                style={[Styles.imageMask, { height: IMAGE_HEIGHT }]}
            />
            <View
                // colors={["transparent", THEME_COLOR_BACKGROUND_OPACITY, THEME_COLOR_BACKGROUND]}
                // start={{ x: 0.3, y: 0 }}
                // end={{ x: 1, y: 0 }}
                style={[Styles.colorMask, { height: COLOR_HEIGHT }]} />
        </View>
    )
}

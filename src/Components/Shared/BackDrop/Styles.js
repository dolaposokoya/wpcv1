import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, THEME_COLOR, WHITE, BLACK, THEME_COLOR_BACKGROUND_OPACITY } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const BACKDROP_HEIGHT = height * .50;
const Styles = StyleSheet.create({
    backView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: -99,
        position: 'absolute',
        width,
        height: height,
    },
    imageMask: {
        width: width,
        resizeMode: 'cover'
    },
    colorMask: {
        width: width,
        height: height * 0.4,
        backgroundColor: THEME_COLOR_BACKGROUND,
        opacity: 1,
        position: 'absolute',
        bottom: 0
    },
    // colorMask: {
    //     width: width,
    //     height: height * 0.4,
    //     backgroundColor: THEME_COLOR_BACKGROUND,
    //     position: 'absolute',
    //     bottom: 0
    // },
})

export default Styles
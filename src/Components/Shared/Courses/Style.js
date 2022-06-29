import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import {  CREAM, fontSize, WHITE } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    container: {
        backgroundColor: WHITE,
        width: width * 0.70,
        height: height * 0.40,
        shadowColor: "#000",
        borderRadius: '12@msr',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 60.27,
        elevation: 10,
    },
    flex1: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '3@msr',
    },
    touchable: {
        width: '100%',
        height: '100%',
        borderRadius: '2@msr'
    },
    cardImage: {
        alignContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        resizeMode: 'cover'
    },
    overLay: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        padding: '5@msr',
        textAlign: 'center',
        color: CREAM,
        fontSize: fontSize.fourteen,
        fontFamily: 'medium'
    },
    // Skelenton
    skeletonView: {
        width: '100%',
        height: '100%',
        borderRadius: '3@msr',
        backgroundColor: 'red'
    }
})

export default Styles
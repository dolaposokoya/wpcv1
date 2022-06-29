import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { THEME_COLOR, LIGHT_GRAY, WHITE, fonts, fontSize, THEME_COLOR_BACKGROUND } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: '12@msr',
        marginLeft: '7@msr',
        paddingLeft: '10@msr',
    },
    flexRow: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '10@msr'
    },
    flexImage: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '20@msr',
    },
    circleImage: {
        width: '45@msr',
        height: '45@msr',
        borderRadius: '50@msr',
        resizeMode: 'cover',
        marginTop: '10@msr',
        marginBottom: '10@msr',
    },
    clearImage: {
        borderRadius: '6@msr',
        width: '110@msr',
        height: '110@msr',
        resizeMode: 'cover',
        marginRight: '7@msr'
    },
    blurImageContainer: {
        borderRadius: '6@msr',
        width: '110@msr',
        height: '110@msr',
        backgroundColor: THEME_COLOR_BACKGROUND,
        opacity: 0.6
    },
    blurImage: {
        borderRadius: '6@msr',
        width: '110@msr',
        height: '110@msr',
    },
    professionalText: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: 'bold'
    },
    text: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.twelve,
        fontFamily: 'regular'
    },
    overLay: {
        position: 'absolute',
        borderRadius: '6@msr',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    overLayText: {
        color: WHITE,
        textAlign: 'center',
        fontFamily: 'medium',
        fontSize: fontSize.twelve,
    },

    // Skeleton Style
    skeletonImage: {
        width: '50@msr',
        height: '50@msr',
        borderRadius: '50@msr',
        resizeMode: 'cover',
        marginTop: '10@msr',
        marginBottom: '10@msr',
    },
    skeletonText: {
        width: '167@msr',
        height: '10@msr',
        borderRadius: '4@msr',
        marginLeft: '10@msr'
    },
    skeletonTextProfile: {
        width: '167@msr',
        height: '10@msr',
        borderRadius: '4@msr',
        marginTop: '5@msr',
        marginLeft: '10@msr'
    },
    skeletonFlex: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '20@msr',
    },
    skeletonClearImage: {
        borderRadius: '6@msr',
        width: '110@msr',
        height: '110@msr',
        resizeMode: 'cover',
    },
    skeletonBlurImage: {
        borderRadius: '6@msr',
        width: '95%',
        height: '100%',
        resizeMode: 'cover',
        backgroundColor: 'blue'
    },
    skeletonFlexRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
})

export default Styles
import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BLACK, CREAM, fonts, fontSize, THEME_COLOR } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const cardWidth = width * 0.67;
const Styles = ScaledSheet.create({
    card: {
        marginLeft: '8@msr',
        width: cardWidth,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '7@msr',
    },
    mainImage: {
        width: '95%',
        height: '130@msr',
        borderRadius: 4,
        resizeMode: 'cover',
    },
    overLay: {
        width: '237@msr',
        borderRadius: '4@msr',
        paddingTop: "12@msr",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '10@msr'
    },
    text: {
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        color: CREAM,
        fontFamily: 'bold',
        fontSize: fontSize.fourteen
    },
    text1: {
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        color: CREAM,
        fontFamily: 'regular',
        paddingTop: '5@msr',
        fontSize: fontSize.fourteen
    },
    text2: {
        padding: '10@msr',
        color: CREAM,
        fontFamily: 'regular',
        textDecorationLine: 'underline'
    },

    // Skelenton
    skeletonView: {
        width: '270@msr',
        height: '7@msr',
        borderRadius: '3@msr',
        marginTop: '5@msr',
    },
    skeletonView1: {
        width: '90@msr',
        height: '7@msr',
        borderRadius: '3@msr',
        marginTop: '5@msr',
        marginBottom: '20@msr',
    },
    skeletonCard: {
        width: width * 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '7@msr'
    },
    skelentonOverLay: {
        width: '260@msr',
        borderRadius: '4@msr',
        paddingTop: "12@msr",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '7@vs'
    },
    skelentonImage: {
        width: '250@msr',
        height: '130@msr',
        resizeMode: 'cover',
    },
})

export default Styles
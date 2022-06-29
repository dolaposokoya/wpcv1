import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BLACK, WHITE, fonts, THEME_COLOR_BACKGROUND, fontSize } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    card: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        marginBottom: height * 0.01,
        width: width,
    },
    profileImage: {
        marginTop: height * 0.02,
        borderRadius: '50@msr',
        width: '45@msr',
        height: '45@msr',
        marginLeft: '10@msr',
    },
    text: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
    },
    profileText: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.twelve,
        fontFamily: 'regular'
    },
    profileDate: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.ten,
        fontFamily: 'regular'
    },
    profileImageView: {
        marginTop: '20@msr',
        width: width,
        height: width,
    },
    profileImageViewImg: {
        width: width,
        height: '90%',
        resizeMode: 'cover'
    },
    flexRow1: {
        marginTop: '-20@msr',
        width: width * 0.90,
    },
    flexRow1Image: {
        marginRight: '10@msr',
        width: '20@msr',
        height: '18@msr',
    },
    commentView: {
        justifyContent: 'flex-start',
        width: width * 0.9,
        marginLeft: '10@msr',
    },
    commentText: {
        color: WHITE,
        marginLeft: '10@msr',
        marginTop: '10@msr',
        fontSize: fontSize.fourteen,
        fontFamily: 'regular'
    },
    like: {
        fontSize: fontSize.ten,
        fontFamily: 'regular',
        color: WHITE,
        opacity: 0.57,
        paddingBottom: '5@msr',
        paddingRight: '5@msr',
    },

    // Skeleton Style
    skeleton: {
        flexDirection: "row",
        alignItems: "center",
        width: width,
        margin: '12@msr',
    },
    skeleton1: {
        marginLeft: '7@msr',
        width: '60@msr',
        height: '60@msr',
        borderRadius: '50@msr'
    },
    flexRow: {
        margin: '10@msr',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    assets: {
        width: '25@msr',
        height: '25@msr',
        marginRight: '30@msr'
    }
})

export default Styles
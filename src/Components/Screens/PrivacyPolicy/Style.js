import React from 'react'
import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, BACKGROUND, NAVY_BLUE, THEME_COLOR_BACKGROUND, fonts, fontSize } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const bottom = '20@msr';
const bottom1 = '80@msr';
const Styles = ScaledSheet.create({
    loaderStyle: {
        alignItems: "center",
    },
    animateHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '25@msr',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center"
    },
    animateView: {
        width: width,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    backBtn: {
        marginLeft: '15@s',
        height: '16@vs',
        width: '16@vs',
    },
    text: {
        fontFamily: 'bold',
        fontSize: fontSize.twenty,
        color: WHITE,
        textAlign: 'center',
    },
    scrollView: {
        width: width,
        height: height,
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: height,
        opacity: 1,
    },
    gradient1: {
        position: 'absolute',
        bottom: bottom,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient1View: {
        width: width * 0.89,
        height: '51@msr',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        borderRadius: '4@msr',
    },
    gradient1Text: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen
    },
    policyImage: {
        width: width,
        height: height * 0.25
    },
    policyContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: bottom1
    },
    policyView: {
        width: width * 0.96,
        alignItems: 'flex-start',
        marginBottom: '25@msr'
    },
    policyText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.fifteen,
        textAlign: 'left',
        lineHeight: '19@msr'
    },
})

export default Styles
import React from 'react'
import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, BACKGROUND, NAVY_BLUE, THEME_COLOR_BACKGROUND, fonts, fontSize } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    loaderStyle: {
        alignItems: "center",
    },
    animateHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '35@msr',
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
    calenderImage: {
        marginRight: '15@s',
    },
    scrollView: {
        width: width,
        height: height,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    firstImage: {
        width: width,
        height: height * 0.6
    },
    absoluteView: {
        position: 'absolute',
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: '65@msr'
    },
    congrat: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.thirty,
        width: width * 0.8,
        paddingTop: '7@msr',
        textAlign: 'center'
    },
    abText: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        width: width * 0.8,
        paddingBottom: '20@msr',
        textAlign: 'center',
    },
    award: {
        width: '72@msr',
        height: '102@msr'
    },
    prizeData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
    },
    prizeImage: {
        width: '41@msr',
        height: '41@msr'
    },
    prizeInfo1: {
        width: width * 0.1,
        paddingLeft: '5@msr',
        paddingRight: '5@msr',
    },
    prizeInfo: {
        width: width * 0.85,
        justifyContent: 'flex-start',
    },
    prizeInfoText: {
        color: '#FFDA44',
        fontFamily: 'bold',
        fontSize: fontSize.twenty,
    },
    prizeInfoText1: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
    },
    prizeImage1: {
        width: width,
        height: height / 3.3,
    },
    absoluteView1: {
        position: 'absolute',
        width: width,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingBottom: '10@msr'
    },
    innerContainer: {
        marginTop: '30@msr',
    },
    innerView: {
        backgroundColor: '#172036',
        opacity: 0.91,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerViewText: {
        paddingTop: '5@msr',
        paddingBottom: '5@msr',
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.twelve,
        textAlign: 'center'
    },
})

export default Styles
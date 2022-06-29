import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { WHITE, fonts, CARD_COLOR, THEME_COLOR_BACKGROUND, fontSize } from '../../../Config/Config'


const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = ScaledSheet.create({
    scrollview: {
        marginBottom: 10
    },
    body: {
        height,
        width
    },
    container: {
        justifyContent: 'space-evenly',
        paddingBottom: '10@msr',
        flexDirection: 'row',
        width: width,
        marginTop: '30@msr',
    },
    closeView: {
        justifyContent: 'flex-start',
    },
    closeViewImage: {
        width: '24@msr',
        height: '24@msr'
    },
    upgradeView: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    upgradeViewNull: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#2CC5D1',
        textAlign: 'center',
        fontFamily: 'bold',
        fontSize: '26@msr',
    },
    textView: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.7
    },
    text1: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.twentytwo,
        width: '100%',
        textAlign: 'center'
    },
    card: {
        paddingTop: '30@msr',
        paddingBottom: '30@msr',
        marginTop: '20@msr',
        paddingBottom: '30@msr',
        // padding: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8,
        height: '160@msr',
        backgroundColor: CARD_COLOR,
        borderWidth: 2,
        borderColor: '#A4A4A4'
    },
    text2: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: '26@msr',
        marginBottom: '5@msr',
        textAlign: 'center'
    },
    text3: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.twenty,
        marginBottom: 5,
        textAlign: 'center'
    },
    text4: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.fourteen,
        textAlign: 'center'
    },
})

export default Styles
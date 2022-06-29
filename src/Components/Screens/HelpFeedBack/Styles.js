import React from 'react'
import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR_BACKGROUND, WHITE, LINE_COLOR, fontSize } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const padding = '12@msr';
const borderWidth = width * 0.91;
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        height,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.97,
        marginTop: height * 0.03,
        // marginBottom: height * 0.03,
    },
    paymentView1: {
        display: 'flex',
        paddingTop: padding,
        paddingBottom: padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: LINE_COLOR,
        borderTopWidth: 1,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: borderWidth,
    },
    paymentViewText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium',
        textAlign: 'left',
    },
    paymentViewImage: {
        width: '22@msr',
        height: '15@msr',
        transform: [
            { rotate: "-90deg" }
        ],
    },
})

export default Styles
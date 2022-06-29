import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, LINE_COLOR, LINE_COLOR1, fontSize } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    editProfile: {
        width: width * 0.95,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.05
    },
    profileImage: {
        width: '130@msr',
        height: '87@msr',
    },
    coverText: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen
    },
    coverText1: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        opacity: 0.57,
        textDecorationLine: 'underline'
    },
    nameProfile: {
        width: width * 0.95,
        display: 'flex',
        marginTop: height * 0.05
    },
    coverName: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        paddingLeft: '30@msr',
        paddingTop: '20@msr',
        paddingBottom: '20@msr',
    },
    coverName1: {
        color: LINE_COLOR1,
        fontFamily: 'medium',
        fontSize: fontSize.twentytwo,
        paddingLeft: '30@msr',
        paddingTop: '14@msr',
        paddingBottom: '14@msr',
    },
    coverAbout: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        paddingLeft: '30@msr',
        paddingTop: '40@msr',
        paddingBottom: '20@msr',
    },
    aboutMeInput: {
        color: LINE_COLOR1,
        fontFamily: 'medium',
        fontSize: fontSize.fifteen,
        paddingLeft: '37@msr',
        // paddingBottom: '20@msr',
    },
    aboutMeLIne: {
        borderBottomWidth: 1,
        borderBottomColor: LINE_COLOR,
        marginBottom: height * 0.05,
    },
    lineColor: {
        borderBottomWidth: 1,
        borderBottomColor: LINE_COLOR,
    },
    profileImage: {
        width: '100%',
        height: '86@msr',
        borderRadius: 5
    },
})

export default Styles
import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { WHITE, THEME_COLOR_BACKGROUND, fonts, THEME_COLOR, CARD_COLOR, BORDER_COLOR } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = StyleSheet.create({
    scrollview: {
        backgroundColor: WHITE,
        height,
        width
    },
    body: {
        height,
        width
    },
    closeView: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        width
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8
    },
    text: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular',
        fontSize: 26,
    },
    textView: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.7
    },
    text1: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular',
        fontSize: 14,
        width: '100%',
        textAlign: 'center'
    },
    card: {
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 20,
        paddingBottom: 30,
        padding: 20,
        borderRadius: 4,
        justifyContent: 'flex-start',
        width: width * 0.8,
        backgroundColor: CARD_COLOR
    },
    text2: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'light',
        fontSize: 26,
        marginBottom: 5
    },
    activeText2: {
        color: WHITE,
    },
    text3: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'bold',
        fontSize: 14,
        marginBottom: 5
    },
    text4: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular',
        fontSize: 14
    },
    formInput: {
        paddingTop: 18,
        paddingBottom: 18,
        marginBottom: 10,
        paddingLeft: 15,
        fontSize: 19,
        backgroundColor: WHITE,
        borderWidth: 2,
        borderColor: BORDER_COLOR,
        borderWidth: 2,
        borderRadius: 4
    },
    inputView: {
        marginTop: 20,
        width: width * 0.9,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 47
    },
    termsCondition: {
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 20,
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular'
    },
    termsCondition1: {
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 10,
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'regular',
        textDecorationLine: 'underline'
    },
    btnView: {
        position: 'absolute',
        bottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: 20,
        paddingBottom: 20,
    },
    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.95,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 40,
        marginTop: 40,
    },
    interest: {
        fontFamily: 'bold',
        fontSize: 16,
        color: WHITE,
        textAlign: 'center',
        fontFamily: 'medium',
        alignSelf: 'center'
    },
})

export default Styles
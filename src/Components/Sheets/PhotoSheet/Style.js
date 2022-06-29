import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { fonts, GRAY, HEADER_COLOR, NAVY_BLUE, TEXT_BLUE, WHITE } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = StyleSheet.create({
    sheet: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: WHITE,
        borderRadius: 10,
        borderBottomColor: NAVY_BLUE,
        width: width * 0.85,
    },
    sheetBottom: {
        backgroundColor: WHITE,
        width: width * 0.85,
        marginTop: 10,
        borderRadius: 10
    },
    sheetOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: GRAY,
        borderBottomWidth: 1,
    },
    sheetOptions1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
    },
    sheetOptionstText: {
        color: TEXT_BLUE,
        fontSize: 16,
        fontFamily: 'regular'
    },
})
export default Styles

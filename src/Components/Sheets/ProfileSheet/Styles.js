import React from 'react';
import { Dimensions } from 'react-native'
import { GRAY, NAVY_BLUE, TEXT_BLUE, WHITE } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    more: {
        width: '10@msr',
        height: '25@msr',
        marginLeft: '15@msr',
        marginRight: '7@msr',
    },
    sheet: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: WHITE,
        borderRadius: '10@msr',
        borderBottomColor: NAVY_BLUE,
        width: width * 0.9,
    },
    sheetBottom: {
        backgroundColor: WHITE,
        width: width * 0.9,
        marginTop: '7@msr',
        marginBottom: '7@msr',
        borderRadius: '10@msr'
    },
    sheetOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        borderBottomColor: GRAY,
        borderBottomWidth: 1,
    },
    sheetOptions2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
    sheetOptions1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
    sheetOptionstText: {
        color: TEXT_BLUE,
        fontSize: '16@msr',
        fontFamily: 'regular'
    },
})
export default Styles

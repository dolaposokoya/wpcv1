import { Dimensions } from 'react-native';
import {  THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, THEME_COLOR, fontSize, TROPHY_COLOR, TROPHY_TEXT_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.99,
    },
    cabText: {
        fontFamily: 'bold',
        fontSize: fontSize.eigthteen,
        color: WHITE,
        textAlign: 'center',
        paddingTop: '23@msr',
        paddingBottom: '23@msr',
    },
    cabText1: {
        fontFamily: 'medium',
        fontSize: fontSize.fourteen,
        color: WHITE,
        textAlign: 'center',
        alignSelf: 'center',
        lineHeight: '20@msr'
    },
    cabView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: width * 0.9,
        paddingTop: '10@msr',
        paddingBottom: '20@msr'
    },
    interestContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: TROPHY_COLOR,
        margin: '5@msr',
        width: width * 0.45,
        padding: '10@msr',
        borderRadius: '6@msr'
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
    },
    imageView: {
        backgroundColor: PLUS_COLOR,
        width: '27@vs',
        height: '27@vs',
        borderRadius: '4@vs',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10@msr'
    },
    trophyName: {
        fontFamily: 'medium',
        fontSize: fontSize.fifteen,
        color: WHITE,
        textAlign: 'center'
    },
    trophyNameActive: {
        fontFamily: 'medium',
        fontSize: fontSize.fifteen,
        color: TROPHY_TEXT_COLOR,
        textAlign: 'center'
    },
    trophyImg: {
        width: '67@msr',
        height: '67@msr',
        margin: '15@msr'
    },
    btnView: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: '20@msr',
        // height,
        paddingBottom: '20@msr',
        bottom: 0
    },

    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.92,
        paddingTop: '14@vs',
        paddingBottom: '14@vs',
    },
    nextBtnText: {
        fontFamily: 'medium',
        alignSelf: 'center',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles
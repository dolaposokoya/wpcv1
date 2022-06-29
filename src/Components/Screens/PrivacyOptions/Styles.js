import { Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, fontSize, LINE_COLOR, LINE_COLOR1 } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window')
const screenHeight = height - (height * 0.18);
const quotaWidth = width * 0.97
const borderWidth = width * 0.95;
const padding = '13@msr';
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // height: height,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        width: width * 0.95,
        marginTop: '30@msr',
        marginBottom: '100@msr',
    },
    rightClick: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.eigthteen
    },
    rightClickEnabled: {
        paddingTop: '7@msr',
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen
    },
    contactView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: borderWidth,
        paddingTop: '5@msr',
        paddingBottom: '5@msr',
        marginTop: 20
    },
    buttonTextStyle: {
        textAlign: 'left',
        color: LINE_COLOR1,
        fontSize: fontSize.eigthteen,
        fontFamily: 'medium',
    },
    inputText: {
        width: borderWidth,
        paddingLeft: padding,
        textAlign: 'left',
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    contactViewImage: {
        width: '22@msr',
        height: '15@msr',
    },
    updateBtnView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '25@msr',
        width: width,
    },
    updateBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        paddingTop: padding,
        paddingBottom: padding,
        width: width * 0.9,
        borderRadius: '4@msr'
    },
    updateBtnText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen
    },
})

export default Styles
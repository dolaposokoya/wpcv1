import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, fontSize, LINE_COLOR, INPUT_TEXT } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const padding = '12@msr';
const size = '134@msr';
const borderWidth = width * 0.91;
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.95,
        marginBottom: padding
    },
    paymentView: {
        display: 'flex',
        paddingTop: padding,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: LINE_COLOR,
        borderTopWidth: 1,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: borderWidth,
    },
    paymentText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium',
        width: borderWidth,
        textAlign: 'left',
        paddingLeft: padding,
        paddingBottom: padding,
    },
    inpuText: {
        fontSize: fontSize.fourteen,
        color: LINE_COLOR,
        fontFamily: 'medium',
        width: borderWidth,
        paddingLeft: padding,
        textAlign: 'left',
    },
    forgetText: {
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT,
        textDecorationLine: 'underline',
        fontFamily: 'medium',
        width: borderWidth,
        paddingLeft: padding,
        textAlign: 'center',
        marginTop: '90@msr'
    },
    paymentViewImage: {
        width: '22@msr',
        height: '15@msr',
    },
})

export default Styles
import { Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, fontSize, LINE_COLOR, INPUT_TEXT } from '../../../Config/Config';
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
    paymentImage: {
        width: size,
        height: size,
        marginTop: height * 0.07
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
    paymentText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium',
        width: borderWidth,
        textAlign: 'left',
    },
    paymentViewText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium',
        textAlign: 'left',
    },
    paymentViewText1: {
        paddingTop: padding,
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT,
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
    inpuText: {
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT,
        fontFamily: 'medium',
        width: borderWidth,
        textAlign: 'left',
    },
    paymentText1: {
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT,
        fontFamily: 'medium',
        width: borderWidth,
        textAlign: 'left',
    },
    paymentText2: {
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT,
        fontFamily: 'bold',
        width: borderWidth,
        textAlign: 'left',
        paddingBottom: padding
    },
})

export default Styles
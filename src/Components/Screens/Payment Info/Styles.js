import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, fontSize, LINE_COLOR, INPUT_TEXT } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const padding = '10@msr';
const size = '134@msr';
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
        paddingBottom: padding,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.07,
        borderTopColor: LINE_COLOR,
        borderTopWidth: 1,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: width * 0.95,

    },
    paymentText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium',
        // paddingBottom: '7@msr',
        width: width * 0.90,
        textAlign: 'left',
    },
    inpuText: {
        fontSize: fontSize.fourteen,
        color: INPUT_TEXT,
        fontFamily: 'medium',
        width: width * 0.90,
        textAlign: 'left',
    },
})

export default Styles
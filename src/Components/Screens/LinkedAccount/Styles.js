import { Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, WHITE, fontSize, LINE_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const padding = '3@msr';
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
        width: width * 0.97,
        marginBottom: padding
    },
    accountView: {
        display: 'flex',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: LINE_COLOR,
        borderTopWidth: 1,
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        width: borderWidth,
    },
    accountText: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'regular',
        textAlign: 'left',
        paddingLeft: padding,
        paddingBottom: padding,
    },
    accountText1: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium',
        textAlign: 'left',
        paddingLeft: padding,
        paddingBottom: padding,
    },
    accountImage: {
        height: '35@msr',
        width: '49@msr',
    },
})

export default Styles
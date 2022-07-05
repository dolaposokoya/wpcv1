import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, fontSize, SUCCESS } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    body: {
        height,
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        alignItems: 'center'
    },
    uploadView: {
        marginTop: height * 0.05,
        marginBottom: height * 0.02,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '79@msr',
        height: '79@msr',
    },
    successMsg: {
        width: width * 0.9,
        paddingTop: '7@vs',
        paddingBottom: '7@vs',
        fontSize: fontSize.fifteen,
        textAlign: 'center',
        backgroundColor: SUCCESS,
        color: WHITE,
        borderWidth: 0,
        fontFamily: 'medium',
        borderRadius: 4,
        marginBottom: '10@msr',
        position: 'relative'
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25@msr',
    },
    formView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'semiBold',
        fontSize: fontSize.eigthteen,
        color: WHITE,
        textAlign: 'center',
    },
    formInput: {
        width: width * 0.89,
        fontFamily: 'regular',
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        paddingLeft: '15@msr',
        fontSize: fontSize.sixteen,
        backgroundColor: WHITE,
        borderWidth: 0,
        borderRadius: '4@msr',
        marginBottom: '18@msr',
    },
    passwordView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '10@msr',
        top: '20@msr',
        width: '25@msr',
        height: '25@msr',
    },
    passwordHide: {
        width: '25@msr',
        height: '25@msr',
        right: 0,
        top: 0,
    },
    btnView: {
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchView: {
        width: width * 0.89,
        backgroundColor: THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@msr',
        paddingTop: '18@msr',
        paddingBottom: '18@msr',
    },
    touchViewText: {
        textDecorationLine: 'none',
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles
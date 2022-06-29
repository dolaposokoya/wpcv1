import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, fontSize } from '../../../Config/Config';
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
        marginBottom: height * 0.05,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '79@msr',
        height: '79@msr',
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20@vs',
    },
    textView1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25@vs',
    },
    text: {
        fontFamily: 'bold',
        fontSize: fontSize.eigthteen,
        color: WHITE,
        textAlign: 'center',
        width: width * 0.80,
    },
    textLight: {
        fontFamily: 'light',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center',
    },
    formInput: {
        width: width * 0.9,
        paddingTop: '15@vs',
        paddingBottom: '15@vs',
        paddingLeft: '15@vs',
        fontSize: fontSize.sixteen,
        textAlign: 'center',
        backgroundColor: WHITE,
        borderWidth: 0,
        fontFamily: 'regular',
        borderRadius: 4,
    },
    btnView: {
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchView: {
        width: '90%',
        backgroundColor: THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingTop: '18@vs',
        paddingBottom: '18@vs',
    },
    textSend: {
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center',
        width: width * 0.80,
        textDecorationLine: 'none',
        fontFamily: 'medium',
        fontSize: 16,
    },
})

export default Styles
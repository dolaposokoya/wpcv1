import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, BADGE_COLOR, fontSize } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    body: {
        height,
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    uploadView: {
        width: width,
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        width: '131@msr',
        height: '131@msr',
        marginTop: height * 0.15,
        backgroundColor: BADGE_COLOR,
        borderRadius: '50@msr',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '61@msr',
        height: '85@msr',
    },
    textView: {
        marginTop: height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    btnView: {
        width,
        position: 'absolute',
        bottom: '22@msr',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchView: {
        width: width * 0.9,
        backgroundColor: THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@msr',
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
})

export default Styles
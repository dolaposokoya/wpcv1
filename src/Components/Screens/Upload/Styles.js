import { Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize } from '../../../Config/Config';
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
        marginTop: height * 0.09,
        marginBottom: height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '131@msr',
        height: '131@msr',
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    btnView: {
        width,
        position: 'absolute',
        bottom: '30@msr',
        justifyContent: 'center',
        alignItems: 'center'
    },
    absoluteView: {
        position: 'absolute',
        bottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: 20,
        paddingBottom: 20,
    },
    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.9,
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
    next: {
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center'
    },
})

export default Styles
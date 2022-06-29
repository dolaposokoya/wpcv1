import { Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, fontSize } from '../../../Config/Config';
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
    },
    text: {
        fontFamily: 'semiBold',
        fontSize: fontSize.eigthteen,
        color: WHITE,
        textAlign: 'center',
        width: width * 0.80,
    },
    formInput: {
        width: width * 0.9,
        textAlign: 'center',
        fontFamily: 'regular',
        fontSize: fontSize.sixteen,
        backgroundColor: WHITE,
        borderWidth: 0,
        borderRadius: 4,
        marginBottom: '25@msr',
        marginTop: '25@msr',
        padding: '12@msr'
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
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
    touchViewText: {
        textDecorationLine: 'none',
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles
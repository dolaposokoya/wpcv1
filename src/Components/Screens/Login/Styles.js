import { Dimensions } from 'react-native';
import { BLACK, fontSize, THEME_COLOR, WHITE } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const BACKDROP_HEIGHT = height * .65;

// const fontss = useFonts(fontsLoaded)


const Styles = ScaledSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width,
        height: height
    },
    backView: {
        position: 'absolute',
        width,
        height: height,
    },
    loginImage: {
        width: width,
        height: height * 0.6,
    },
    formContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        // backgroundColor: 'red',
        width: width,
        bottom: (height * 0.04),
    },
    registerText: {
        fontSize: fontSize.thirtyfive,
        color: WHITE,
        marginBottom: '2@s',
        fontFamily: 'bold'
    },
    errorText: {
        marginTop: '10@msr',
        fontSize: '15@msr',
        textAlign: 'left',
        width: '97%',
        color: 'red'
    },
    registerText1: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'light'
    },
    noAcct: {
        marginTop: '10@vs',
        marginBottom: '15@msr',
        width: width * 0.8,
    },
    registerText2: {
        fontSize: fontSize.sixteen,
        justifyContent: 'flex-start',
        color: WHITE,
        fontFamily: 'medium'
    },
    registerText31: {
        fontSize: fontSize.sixteen,
        textDecorationLine: 'underline',
        color: WHITE,
        fontFamily: 'medium'
    },
    forget: {
        marginTop: '12@msr'
    },
    registerText3: {
        textDecorationLine: 'underline',
        fontSize: fontSize.sixteen,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '7@msr',
        color: WHITE,
        fontFamily: 'regular'
    },
    formInputEmail: {
        paddingTop: '14@vs',
        paddingBottom: '14@vs',
        paddingLeft: '15@msr',
        fontSize: fontSize.sixteen,
        fontFamily: 'regular',
        backgroundColor: WHITE,
        color: BLACK,
        borderWidth: 0,
        borderRadius: '4@msr',
        width: width * 0.87,
    },
    formInput: {
        paddingTop: '14@vs',
        paddingBottom: '14@vs',
        paddingLeft: '15@msr',
        fontSize: fontSize.sixteen,
        fontFamily: 'regular',
        backgroundColor: WHITE,
        color: BLACK,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 4,
        width: width * 0.87,
    },
    formPasswordContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: '30@s',
        top: '22@s',
    },
    formPassword: {
        width: '25@s',
        height: '25@s',
    },
    buttonContainerBtn: {
        width: width * 0.87,
        borderRadius: '4@msr',
        justifyContent: 'center',
        alignItems: 'center',
    },
    font: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        paddingTop: '5@vs',
        paddingBottom: '5@vs',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '18@msr'
    },
    termsCondition: {
        fontSize: '14@s',
        justifyContent: 'center',
        alignItems: 'center',
        color: WHITE,
        fontFamily: 'regular'
    },
    termsCondition1: {
        fontSize: '14@s',
        justifyContent: 'center',
        alignItems: 'center',
        color: THEME_COLOR,
        fontFamily: 'regular',
        textDecorationLine: 'underline'
    },
})

export default Styles
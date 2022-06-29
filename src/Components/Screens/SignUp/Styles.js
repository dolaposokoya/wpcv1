import { StyleSheet, Dimensions } from 'react-native';
import { BLACK, fontSize, PLACEHOLDER_COLOR, THEME_COLOR, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    backView: {
        position: 'absolute',
        width,
        height: height,
    },
    scrollView: {
        flex: 1,
        paddingBottom: '40@msr'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // backgroundColor: 'rgba(69,85,117,0.7)',
        opacity: 0.7
    },
    formContainer: {
        position: 'absolute',
        zIndex: 99999,
        width: width * 0.9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    container: {
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999,
        marginTop: '40@msr',
        bottom: 0,
    },
    formContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15@s',
    },
    textContainer1: {
        width: width * 0.8,
        display: 'flex',
        justifyContent: 'center',
    },
    registerText: {
        fontSize: '35@s',
        justifyContent: 'flex-start',
        textAlign: 'left',
        color: WHITE,
        fontFamily: 'bold',
    },
    registerText1: {
        fontSize: fontSize.sixteen,
        justifyContent: 'flex-start',
        color: WHITE,
        fontFamily: 'light',
        marginBottom: '7@msr',
    },
    registerText2: {
        fontSize: fontSize.sixteen,
        color: WHITE,
        fontFamily: 'medium'
    },
    registerText3: {
        fontSize: fontSize.sixteen,
        textDecorationLine: 'underline',
        color: WHITE,
        fontFamily: 'medium'
    },
    formWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formInput: {
        fontSize: fontSize.sixteen,
        paddingTop: '12@vs',
        paddingBottom: '12@vs',
        paddingLeft: '18@msr',
        color: BLACK,
        backgroundColor: WHITE,
        borderWidth: 0,
        width: width * 0.9,
        borderRadius: '4@msr',
        fontFamily: 'regular',
        marginBottom: '-5@msr'
    },
    iconInput: {
        height: '15@msr',
        width: '19@vs'
    },
    dropDown: {
        paddingTop: '180@msr',
        paddingBottom: '18@msr',
        paddingLeft: '15@msr',
        fontSize: fontSize.sixteen,
        color: PLACEHOLDER_COLOR,
        backgroundColor: WHITE,
        borderWidth: 0,
        borderRadius: 40,
    },
    formPasswordContainer: {
        position: 'absolute',
        right: width * 0.08,
        top: width * 0.06,
    },
    formPassword: {
        width: '25@msr',
        height: '25@msr',
    },
    errorText: {
        marginTop: '10@msr',
        fontSize: '15@msr',
        textAlign: 'left',
        width: width * .90,
        paddingHorizontal: '5@msr',
        paddingVertical: '5@msr',
        color: WHITE,
        backgroundColor: 'red',
    },
    signBtnConatiner: {
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        paddingLeft: '20@msr',
        paddingRight: '20@msr',
        justifyContent: 'center',
        width: width * .97,
        alignItems: 'center',
    },
    signBtn: {
        borderRadius: 4,
        paddingTop: '14@msr',
        paddingBottom: '14@msr',
        width: width * 0.9,
    },
    signText: {
        textAlign: 'center',
        fontSize: fontSize.sixteen,
        fontFamily: 'medium'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15@vs',
        width: width * 0.9,
    },
    termsCondition: {
        fontSize: fontSize.fourteen,
        justifyContent: 'center',
        alignItems: 'center',
        color: WHITE,
        fontFamily: 'regular',
        marginBottom: '5@msr'
    },
    termsCondition1: {
        fontSize: fontSize.fourteen,
        justifyContent: 'center',
        alignItems: 'center',
        color: THEME_COLOR,
        fontFamily: 'regular',
        textDecorationLine: 'underline'
    },

})

export default Styles
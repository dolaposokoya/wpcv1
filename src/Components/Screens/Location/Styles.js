import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts, fontSize, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, BADGE_COLOR, INTEREST_COLOR } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    body: {
        height,
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        alignItems: 'center'
    },
    uploadView: {
        // marginTop: height * 0.05,
        marginBottom: height * 0.02,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '79@msr',
        height: '79@msr',
    },
    formInput: {
        width: width * 0.97,
        height: '52@msr',
        // paddingTop: '18@msr',
        // paddingBottom: '18@msr',
        paddingLeft: '65@msr',
        fontSize: fontSize.sixteen,
        backgroundColor: INTEREST_COLOR,
        borderWidth: 0,
        borderRadius: '4@msr',
        marginBottom: 25,
        fontFamily: 'regular'
    },
    passwordView: {
        position: 'absolute',
        left: '20@msr',
        top: '13@msr',
    },
    passwordView1: {
        position: 'absolute',
        right: '20@msr',
        top: '13@msr',
    },
    passwordHide: {
        width: '25@msr',
        height: '25@msr',
        opacity: 0.59
    },
})

export default Styles
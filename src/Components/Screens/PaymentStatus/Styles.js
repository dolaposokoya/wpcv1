import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const screenHeight = height - (height * 0.18);
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    body: {
        display: 'flex',
        // justifyContent: 'center',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        height: screenHeight,
    },
    smileImage: {
        width: '61@msr',
        height: '61@msr',
        marginBottom: '10@msr',
        opacity: 0.48
    },
    smileText: {
        color: WHITE,
        fontSize: fontSize.twenty,
        fontFamily: 'medium',
        textAlign: 'center'
    },
    interestContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: PLACEHOLDER_COLOR,
        width: width * 0.95,
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageView: {
        backgroundColor: PLUS_COLOR,
        width: '27@vs',
        height: '27@vs',
        borderRadius: '4@vs',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10@msr'
    },
    interest: {
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center'
    },
    interestMark: {
        width: '11@vs',
        height: '11@vs',
    },
    btnView: {
        position: 'relative',
        bottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: 20,
        paddingBottom: 20,
    },
    // btnView: {
    //     position: 'absolute',
    //     bottom: 10,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: width,
    //     paddingTop: 20,
    //     paddingBottom: 20,
    // },
    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.92,
        paddingTop: '14@vs',
        paddingBottom: '14@vs',
    },
    nextBtnText: {
        fontFamily: 'medium',
        alignSelf: 'center',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles
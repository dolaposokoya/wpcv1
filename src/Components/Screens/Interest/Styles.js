import { Dimensions } from 'react-native';
import { fonts, GRAY, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, fontSize, BOTTOM_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.95,
    },
    interestContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: BOTTOM_COLOR,
        paddingTop: '14@msr',
        paddingBottom: '14@msr',
        width: width * 0.9,
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
    },
    imageView: {
        backgroundColor: PLUS_COLOR,
        width: '29@vs',
        height: '29@vs',
        borderRadius: '4@vs',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10@msr'
    },
    interest: {
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        color: WHITE,
        // textAlign: 'center'
    },
    interestMark: {
        width: '10@vs',
        height: '10@vs',
    },
    btnView: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20@msr',
        paddingBottom: '20@msr',
    },
    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: '4@msr',
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.9,
        marginBottom: '17@msr',
        paddingTop: '12@vs',
        paddingBottom: '12@vs',
    },
    nextBtnText: {
        fontFamily: 'medium',
        alignSelf: 'center',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles
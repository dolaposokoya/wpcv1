import { Dimensions } from 'react-native';
import { fonts, THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, fontSize, TEXT_COLOR, INPUT_TEXT, OTHER_GRAY } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window')
const screenHeight = height - (height * 0.18);
const gapWidth = width / 3.19
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // height: height,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        width: width,
        marginTop: '30@msr',
        marginBottom: '100@msr',
        height: height,
    },
    statsContainer: {
        width: width * 0.97,
        padding: '10@msr',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '33@msr'
    },
    statsView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    statsView1: {
        marginTop: '18@msr',
        marginBottom: '30@msr',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8
    },
    statsText: {
        color: TEXT_COLOR,
        fontSize: fontSize.sixteen,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    statsText1: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        textAlign: 'center',
    },
    statsText1Active: {
        color: INPUT_TEXT,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        textAlign: 'center',
    },
    statsImage: {
        height: '88@msr',
        width: '88@msr',
    },
    statsViewText1: {
        color: INPUT_TEXT,
        fontSize: fontSize.fourteen,
        fontFamily: 'medium',
        textAlign: 'center',
    },
    userStats: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2@msr',
    },
    circle: {
        marginTop: '7@msr',
        // width: '100@msr',
        width: gapWidth,
        height: '3@msr',
        backgroundColor: THEME_COLOR
    },
    rectangle: {
        marginTop: '7@msr',
        width: gapWidth,
        height: '3@msr',
        backgroundColor: OTHER_GRAY
    },
    userStatView: {
        marginTop: '4@msr',
        borderRadius: '6@msr',
        opacity: 0.4,
        width: width * 0.97,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: width * 0.07,
        paddingRight: width * 0.07,
        paddingTop: width * 0.02,
        paddingBottom: width * 0.02,
        backgroundColor: '#1F3D7C',
    },
    userStatViewText: {
        fontSize: fontSize.fourteen,
        fontFamily: 'medium',
        color: WHITE
    }
})

export default Styles
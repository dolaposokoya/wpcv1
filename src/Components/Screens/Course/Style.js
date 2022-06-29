import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { BLACK, WHITE, THEME_COLOR_BACKGROUND, fontSize, APPLY_NOW } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');
const imageWidth = '45@msr'
const zoomWidth = '24@msr'
const padding = '17@msr'
const Styles = ScaledSheet.create({
    scrollView: {
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    contentContainerStyle: {
        alignItems: 'center',
    },
    scrollView1: {
        marginBottom: 99
    },
    introView: {
        backgroundColor: BLACK,
        width: width,
        height: '260@msr',
    },
    introGradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 999999,
        width: width,
        justifyContent: 'flex-end',
        paddingLeft: '15@msr',
        paddingBottom: '15@msr',
        alignItems: 'flex-start'
    },
    introGradientText: {
        color: '#9AC9FF',
        fontFamily: 'regular',
        fontSize: fontSize.twelve
    },
    introGradientText1: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twentysix,
    },
    introImage: {
        width: width,
        height: '260@msr',
    },
    profileView: {
        flexDirection: 'row',
        width: width,
    },
    profileIntro: {
        alignItems: 'flex-start'
    },
    profileImage: {
        marginLeft: '10@msr',
        marginRight: '10@msr',
        width: imageWidth,
        height: imageWidth,
    },
    social: {
        flexDirection: 'row',
        marginTop: '7@msr'
    },
    socialApp: {
        marginRight: '7@msr',
        width: '8@msr',
        height: '16@msr',
    },
    socialApp1: {
        marginRight: '7@msr',
        width: '19@msr',
        height: '16@msr',
    },
    socialApp2: {
        marginRight: '7@msr',
        width: '16@msr',
        height: '16@msr',
    },
    register: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerNow: {
        marginTop: '32@msr',
        backgroundColor: APPLY_NOW,
        width: width * 0.9,
        paddingTop: padding,
        paddingBottom: padding,
        borderRadius: '4@msr',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerNowText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen
    },
    videoView: {
        marginTop: '33@msr',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: width,
        height: '240@msr',
    },
    videoDisplay: {
        width: width,
        height: '240@msr',
    },
    videoGradient: {
        position: 'absolute',
        backgroundColor: THEME_COLOR_BACKGROUND,
        opacity: 0.58,
        top: 0,
        bottom: 0,
        left: 0,
        // zIndex: 999999,
        width: width,
        height: '240@msr',
        justifyContent: 'space-between',
    },
    videoInfo: {
        width: width * 0.8,
        paddingLeft: '15@msr',
        paddingBottom: '15@msr',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    videoInfoText: {
        fontFamily: 'medium',
        fontSize: fontSize.eleven,
        color: WHITE
    },
    videoInfoText1: {
        fontFamily: 'bold',
        fontSize: fontSize.fourteen,
        color: WHITE
    },
    enVideo: {
        alignSelf: 'flex-end',
        marginTop: '10@msr',
        marginRight: '10@msr',
        width: zoomWidth,
        height: zoomWidth,
    },
    moreInfo: {
        marginTop: '33@msr',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    moreView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.93,
    },
    moreViewText: {
        color: WHITE,
        fontSize: fontSize.fourteen,
        fontFamily: 'bold'
    },
    line: {
        marginTop: '10@msr',
        marginBottom: '10@msr',
        width: width * 0.6,
        height: '2@msr',
        backgroundColor: '#3D3D3D'
    },
    moreViewText1: {
        color: WHITE,
        fontSize: '13@msr',
        fontFamily: 'regular'
    },
})

export default Styles
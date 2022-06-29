import { Dimensions } from 'react-native'
import { WHITE, THEME_COLOR_BACKGROUND, fontSize, BLACK, PEACH, THEME_COLOR } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const left = '15@msr';
const left1 = '12@msr';
const top = '10@msr';
const padding = '15@msr';
const linearWidth = width * 0.8;
const halfWidth = width * 0.45;
const sixthWidth = width * 0.67;
const Styles = ScaledSheet.create({
    headerText: {
        fontSize: fontSize.twenty,
        fontFamily: 'bold',
        color: WHITE
    },
    contentContainerStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    list: {
        width,
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.twenty,
        textAlign: 'left',
        paddingLeft: left,
        paddingBottom: '15@msr',
        paddingTop: '15@msr',
    },
    gradientView: {
        backgroundColor: BLACK,
        width: width / 2,
        marginRight: '15@msr'
    },
    gradientImage: {
        height: height / 4,
        width: width / 2
    },
    gradientView1: {
        backgroundColor: BLACK,
        width: linearWidth,
        marginBottom: height * 0.02,
        marginRight: '10@msr'
    },
    gradientImage1: {
        height: height / 4,
        width: linearWidth
    },
    gradientText: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        paddingBottom: '10@msr'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 999999,
        width: width / 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    gradient1: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 999999,
        width: linearWidth,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    infoView: {
        marginTop: '30@msr',
        marginBottom: '10@msr',
        width: '280@msr'
    },
    infoViewText: {
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        color: WHITE,
        paddingLeft: left1,
        lineHeight: '23@msr'
    },
    infoViewText1: {
        fontSize: fontSize.twenty,
        fontFamily: 'extraBold',
        color: WHITE,
        paddingLeft: left,
        lineHeight: '23@msr'
    },
    infoViewText2: {
        fontSize: fontSize.twenty,
        fontFamily: 'medium',
        color: WHITE,
        paddingLeft: left,
        lineHeight: '23@msr'
    },
    infoViewText3: {
        fontSize: fontSize.twenty,
        fontFamily: 'semiBold',
        color: PEACH,
        paddingLeft: left,
        lineHeight: '23@msr'
    },
    gradientText1: {
        textAlign: 'center',
        paddingLeft: left,
        paddingRight: left,
        paddingBottom: left,
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twentysix
    },
    gradientText2: {
        textAlign: 'center',
        paddingBottom: left,
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.fourteen
    },
    masterView: {
        // width: sixthWidth,
        marginBottom: height * 0.04,
    },
    masterImage: {
        height: height / 5,
        width: halfWidth,
        resizeMode: 'cover'
    },
    masterDetails: {
        // width: sixthWidth,
        justifyContent: 'flex-start',
    },
    masterText: {
        textAlign: 'left',
        paddingTop: top,
        color: WHITE,
        fontFamily: 'semiBold',
        fontSize: fontSize.eigthteen
    },
    masterText1: {
        textAlign: 'left',
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.fourteen
    },
    techContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        marginBottom: height * 0.07,
    },
    teachView: {
        backgroundColor: THEME_COLOR,
        paddingTop: padding,
        paddingBottom: padding,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50@msr',
        width: width * 0.93,
        marginBottom: height * 0.03
    },
    teach: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.eigthteen
    }
})

export default Styles
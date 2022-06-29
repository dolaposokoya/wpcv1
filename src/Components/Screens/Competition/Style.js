import { Dimensions } from 'react-native'
import { THEME_COLOR, WHITE, THEME_COLOR_BACKGROUND, OTHER_GRAY, fontSize, BOTTOM_COLOR, CLOSED_COMP } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = ScaledSheet.create({
    container: {
        justifyContent: 'space-around',
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    text: {
        color: OTHER_GRAY,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        paddingTop: height * 0.016,
        paddingBottom: height * 0.016,
        textAlign: 'center'
    },
    textActive: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        paddingTop: height * 0.016,
        paddingBottom: height * 0.016,
        textAlign: 'center'
    },
    textComp: {
        paddingLeft: width * 0.05,
        color: WHITE,
        fontSize: fontSize.twenty,
        fontFamily: 'medium',
        paddingTop: '19@msr',
        paddingBottom: '15@msr',
    },
    underLine: {
        backgroundColor: OTHER_GRAY,
        height: 4,
        borderRadius: 10,
        width: width * 0.485
    },

    hostComp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.95,
        backgroundColor: THEME_COLOR,
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        paddingLeft: '18@msr',
        borderRadius: 4
    },
    closedComp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.95,
        backgroundColor: CLOSED_COMP,
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        paddingLeft: '18@msr',
        borderRadius: 4
    },
    hostCompText: {
        fontFamily: 'medium',
        fontSize: fontSize.eigthteen,
        color: WHITE
    },
    hostCompText1: {
        fontFamily: 'medium',
        fontSize: fontSize.twenty,
        color: WHITE
    },
    hostCompText2: {
        fontFamily: 'medium',
        fontSize: fontSize.twelve,
        color: OTHER_GRAY
    },
    closedCompText: {
        fontFamily: 'medium',
        fontSize: fontSize.eigthteen,
        color: WHITE,
        textDecorationLine: 'underline'
    },
    hostCompImage: {
        width: '22@msr',
        height: '15@msr',
        marginRight: '20@msr',
        transform: [
            { rotate: "-90deg" },
        ]
    },
    photofit: {
        marginTop: height * 0.05,
        marginBottom: height * 0.1,
        width: width * 0.95,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    photofitComp: {
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
        borderRadius: 4
    },
    photofitCompSubmit: {
        borderWidth: 2,
        borderColor: OTHER_GRAY,
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        borderRadius: '6@msr'
    },
    photofitCompSubmitText: {
        fontFamily: 'medium',
        fontSize: fontSize.fourteen,
        color: OTHER_GRAY
    },
    subContainer: {
        marginTop: height * 0.05,
        alignItems: 'center'
    },
    subImageOverlay: {
        position: 'absolute',
        top: 0,
        marginTop: '5@msr',
        width: width,
        height: '252@msr',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND,
        zIndex: 9,
        opacity: 0.51,
    },
    subImage: {
        marginTop: '5@msr',
        width: width,
        height: '252@msr',
        resizeMode: 'cover'
    },
    discoverText: {
        fontSize: fontSize.twenty,
        fontFamily: 'medium',
        color: WHITE,
        width: width * 0.5,
        opacity: 0.7,
        textAlign: 'center',
    },
    discoverText1: {
        fontSize: fontSize.fourteen,
        fontFamily: 'regular',
        color: WHITE,
        opacity: 0.7,
        textAlign: 'center',
    },
    exploreBtn: {
        borderWidth: 1,
        borderColor: BOTTOM_COLOR,
        width: width * 0.6,
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
    },
    exploreText: {
        fontSize: fontSize.twenty,
        fontFamily: 'medium',
        color: WHITE,
    },
})

export default Styles
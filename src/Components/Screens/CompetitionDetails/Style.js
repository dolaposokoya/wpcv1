import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR, WHITE, THEME_COLOR_BACKGROUND, fontSize, GRAY1, BOTTOM_COLOR, UPGRADE_COLOR, INTEREST_COLOR } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');
const paddingBottom = '13@msr';
const paddingBottom1 = '7@msr';
const paddingBottom2 = '4@msr';
const padding = '18@msr';
const padding1 = '9@msr';
const bottom = '69@msr';
const Styles = ScaledSheet.create({
    headerText: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twenty
    },
    SafeAreaView: {
        flex: 1,
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    scrollView: {
        display: 'flex',
        alignItems: 'center',
    },
    competitionData: {
        width: width,
        display: 'flex',
    },
    imageContainer: {
        marginTop: '0@msr',
        width: width,
        height: '261@msr',
    },
    overView: {
        position: 'absolute',
        bottom: '2@msr',
        width,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    trophyImage: {
        marginTop: '20@msr',
        width: '52@msr',
        height: '52@msr'
    },
    registerView: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: width,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerNow: {
        backgroundColor: UPGRADE_COLOR,
        height: '51@msr',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    registerNowText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.fourteen,
        textAlign: 'center'
    },
    viewContainer: {
        width: width * 0.49,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: width * 0.499,
        height: '3@msr',
        borderRadius: 6,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line1: {
        width: width * 0.499,
        height: '3@msr',
        borderRadius: 6,
        backgroundColor: GRAY1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    compText: {
        color: WHITE,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        paddingTop: padding,
        paddingBottom: padding1
    },
    compText1: {
        color: GRAY1,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
        paddingTop: padding,
        paddingBottom: padding1
    },

    prizeContainer: {
        width: width * 0.95,
        alignItems: 'center'
    },
    prizeContainer1: {
        width: width * 0.95,
        alignItems: 'flex-start',
        marginTop: '25@msr',
        // marginBottom: '25@msr',
    },
    prizeContainerText: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twenty,
        textAlign: 'center',
        lineHeight: '26@msr'
    },
    prizeContainerText1: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twenty,
        textAlign: 'left',
        lineHeight: '26@msr'
    },
    prizeCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: paddingBottom,
        paddingBottom: paddingBottom,
        borderBottomColor: BOTTOM_COLOR,
        borderBottomWidth: '2@msr',
        width: width * 0.95,
    },
    prizeCardText: {
        color: THEME_COLOR,
        padding: '2@msr',
        fontSize: fontSize.twenty,
        fontFamily: 'bold',
        lineHeight: '24@msr',
        textAlign: 'center',
    },
    prizeCardText1: {
        color: WHITE,
        padding: '2@msr',
        fontSize: fontSize.fourteen,
        fontFamily: 'regular',
        width: width * 0.65,
        lineHeight: '24@msr',
        textAlign: 'center',
    },
    dateContainer: {
        marginTop: '20@msr',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: INTEREST_COLOR,
        borderRadius: '10@msr',
        paddingTop: '50@msr',
        paddingBottom: '25@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        textAlign: 'center',
        width: width * 0.95,
    },
    rulesContainer: {
        marginBottom: bottom,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '20@msr',
        paddingBottom: '25@msr',
        width: width * 0.95,
    },
    rulesText: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        textAlign: 'left',
        width: '100%',
        paddingBottom: paddingBottom
    },
    works: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twentysix,
        textAlign: 'center',
        lineHeight: '26@msr',
        paddingBottom: paddingBottom1
    },
    contentView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '20@msr',
    },
    login: {
        color: THEME_COLOR,
        fontFamily: 'semiBold',
        fontSize: fontSize.twenty,
        textAlign: 'center',
        lineHeight: '26@msr',
        paddingBottom: paddingBottom1,
        paddingLeft: paddingBottom2,
        paddingRight: paddingBottom2
    },
    account: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        textAlign: 'center',
        width: width * 0.7,
        paddingBottom: paddingBottom1
    },
})

export default Styles
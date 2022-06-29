import { Dimensions } from 'react-native'
import { WHITE, THEME_COLOR_BACKGROUND, fonts, fontSize, BLACK, TEXT_COLOR, PREMIUM_RED, THEME_COLOR, APPLY_NOW } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen');
const left = '15@msr';
const Styles = ScaledSheet.create({
    headerText: {
        fontSize: fontSize.twenty,
        fontFamily: 'bold',
        color: WHITE
    },
    scrollView: {
        flex: 1,
        // height,
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    contentContainerStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    body: {
        paddingBottom: height * 0.1,
    },
    gradientView: {
        backgroundColor: BLACK,
        height: '251@msr',
        width: '390@msr',
    },
    gradientImage: {
        height: '251@msr',
        width: '390@msr',
        resizeMode: 'cover'
    },
    list: {
        color: TEXT_COLOR,
        fontFamily: 'medium',
        fontSize: fontSize.eigthteen,
        textAlign: 'left',
        paddingLeft: left,
        paddingBottom: '5@msr',
        paddingTop: '15@msr',
    },
    list1: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        textAlign: 'left',
        paddingLeft: left,
        lineHeight: 20
    },
    flexRow: {
        width,
        flexDirection: 'row',
        marginTop: height * 0.01
    },
    list2: {
        color: WHITE,
        opacity: 0.57,
        fontFamily: 'italic',
        fontSize: fontSize.fourteen,
        textAlign: 'left',
        paddingLeft: left,
    },
    deadLine: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.fourteen,
        textAlign: 'left',
        paddingLeft: left,
    },
    deadLineDate: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        textAlign: 'left',
    },
    premium: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        textAlign: 'left',
        paddingLeft: left,
    },
    premiumPrice: {
        color: PREMIUM_RED,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        textAlign: 'left',
    },
    flexRow1: {
        width,
        // height: height * 0.1,
        flexDirection: 'row',
        marginTop: height * 0.03,
        marginBottom: height * 0.05,
        alignItems: 'center',
    },
    infoView: {
        backgroundColor: THEME_COLOR,
        marginRight: left,
        alignItems: 'center',
        marginLeft: left,
        borderRadius: '4@msr'
    },
    infoView1: {
        backgroundColor: APPLY_NOW,
        borderRadius: '4@msr',
        alignItems: 'center'
    },
    infoViewText: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.sixteen,
        padding: '12@msr',
        paddingLeft: '30@msr',
        paddingRight: '30@msr',
    },
    checkOut: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.twenty,
        textAlign: 'left',
        paddingLeft: left,
        marginBottom: left
    },
})

export default Styles
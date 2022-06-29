import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts, THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, PLACEHOLDER_COLOR, THEME_COLOR, BADGE_COLOR, INTEREST_COLOR, fontSize, BOTTOM_COLOR, PINK } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    // contentContainerStyle: {
    //     alignItems: 'center',
    // },
    body: {
        width,
        alignItems: 'center',
        backgroundColor: THEME_COLOR_BACKGROUND,
        marginTop: '15@msr',
    },
    notificationView: {
        width: width * 0.93,
        flexDirection: 'row',
        borderBottomColor: BOTTOM_COLOR,
        paddingTop: '15@msr',
        paddingBottom: '12@msr',
        borderBottomWidth: 1,
    },
    notificationImage: {
        height: '45@msr',
        width: '45@msr',
        borderRadius: '50@msr',
        borderWidth: 1,
        borderColor: BOTTOM_COLOR,
        margin: '10@msr'
    },
    notificationName: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        lineHeight: 40
    },
    notificationTitle: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen,
        opacity: 0.57,
        lineHeight: 20
    },
    notificationTime: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.ten
    },
    notificationBtnView: {
        backgroundColor: PINK,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@msr',
        width: width * 0.23,
        marginTop: '15@msr',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
    },
    notificationBtnText: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.twelve
    },
})

export default Styles


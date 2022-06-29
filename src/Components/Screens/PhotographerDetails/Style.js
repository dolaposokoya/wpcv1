import { Dimensions } from 'react-native'
import { THEME_COLOR, WHITE, fontSize, fonts, TEXT_COLOR, OTHER_GRAY, THEME_COLOR_BACKGROUND, LIGHT_GRAY1 } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
const containerWidth = width * 0.95;
const containerWidth1 = width * 0.90;
const flatListWidth = width * 0.95;

const Styles = ScaledSheet.create({
    animateHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1,
    },
    profileContainer: {
        marginTop: height * 0.01
    },
    backBtn: {
        margin: '15@s',
        height: '16@vs',
        width: '16@vs',
    },
    container: {
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    scrollView: {
        marginTop: height * 0.10,
        marginBottom: height * 0.07,
        display: 'flex',
        // width: width,
        alignItems: 'center',
    },
    profileInfoData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '2@msr'
    },
    profileImage: {
        width: '72@msr',
        height: '72@msr',
        borderColor: WHITE,
        borderWidth: 5,
        borderRadius: '100@msr',
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'green',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        // width: containerWidth,
    },
    userView: {
        flexDirection: 'row',
        width: width * 0.75,
    },
    usernameText: {
        color: WHITE,
        fontSize: fontSize.twenty,
        fontFamily: 'bold',
        textAlign: 'left',
    },
    badgeImage: {
        width: '20@msr',
        height: '27@msr',
        marginLeft: '5@msr'
    },
    starImage: {
        width: '14@msr',
        height: '14@msr',
        marginLeft: '5@msr'
    },
    profileImageInfo: {
        width: containerWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '10@msr',
    },
    mainInfo: {
        display: 'flex',
        justifyContent: 'center',
        width: containerWidth,
        marginTop: '15@msr'
    },
    text: {
        color: TEXT_COLOR,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium',
    },
    infoText: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: 'regular',
        lineHeight: '18@msr',
        marginBottom: '15@msr'
    },
    text1: {
        color: WHITE,
        opacity: 0.76,
        fontSize: fontSize.twelve,
        fontFamily: 'regular',
        marginRight: '10@msr',
        marginTop: '5@msr',
        textAlign: 'left'
    },
    userAction: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    userActionInfo: {
        backgroundColor: THEME_COLOR,
        margin: '5@msr',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        paddingLeft: '30@msr',
        paddingRight: '30@msr',
        borderRadius: 4,
    },
    userActionInfoCard: {
        shadowColor: "#000",
        backgroundColor: THEME_COLOR,
        width: '64@msr',
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        borderRadius: '4@msr',
        elevation: 25,
        alignSelf: 'flex-end'
    },
    userActionInfoCard1: {
        shadowColor: "#000",
        backgroundColor: THEME_COLOR,
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        borderRadius: '4@msr',
        elevation: 25,
        alignSelf: 'flex-end'
    },
    photoActionCard: {
        shadowColor: "#000",
        backgroundColor: LIGHT_GRAY1,
        opacity: 0.41,
        marginTop: '5@msr',
        paddingTop: '5@msr',
        paddingBottom: '5@msr',
        paddingLeft: '10@msr',
        paddingRight: '20@msr',
        width: '70@msr',
        borderRadius: '9@msr',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        elevation: 25,
    },
    userActionInfoText: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: 'semiBold'
    },
    checkImage: {
        width: '14@msr',
        height: '11@msr'
    },
    userActionInfoText1: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: 'regular'
    },
    portfolioDetails: {
        width: containerWidth,
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10@msr',
        justifyContent: 'center',
        alignItems: 'center',
    },
    portfolioInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3@msr',
    },
    portfolioDetailsText: {
        color: OTHER_GRAY,
        fontSize: fontSize.fourteen,
        fontFamily: 'bold'
    },
    portfolioDetailsTextActive: {
        color: WHITE,
    },
    circle: {
        marginTop: '7@msr',
        width: '90@msr',
        height: '2@vs',
        backgroundColor: THEME_COLOR
    },
    rectangle: {
        marginTop: '7@msr',
        width: '90@msr',
        height: '2@vs',
        backgroundColor: OTHER_GRAY
    },
    portfolioShowcaseView: {
        width: width * 0.46,
        // height: '237@msr',
        borderRadius: 5,
        marginTop: '15@msr',
        margin: '5@msr',
    },
    portfolioShowcaseInfo: {
        width: '100%',
        // height: '100%',
        borderRadius: 5,
    },
})

export default Styles
import { Dimensions } from 'react-native'
import { THEME_COLOR, TEXT_COLOR, WHITE, THEME_COLOR_BACKGROUND, OTHER_GRAY, fontSize } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
const Styles = ScaledSheet.create({
    animateHeader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '35@msr',
        paddingTop: '15@msr',
        // paddingBottom: '15@msr',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center"
    },
    animateView: {
        width: width * 0.9,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    backBtn: {
        height: '18@vs',
        width: '18@vs',
    },
    profileContainer: {
        marginTop: height * 0.01
    },
    foreGround: {
        display: 'flex',
        width: width,
        flex: 1,
        backgroundColor: THEME_COLOR_BACKGROUND,
        zIndex: -9999999
    },
    foreGround1: {
        marginTop: height * 0.20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: width,
    },
    profileView: {
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: '10@msr',
        paddingRight: '20@msr',
    },
    followerView: {
        flexDirection: 'row',
        alignItems: "center",
        // marginRight: '15@msr'
    },
    followView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: width * 0.71,
    },
    membershipView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2@msr',
        borderColor: THEME_COLOR,
        backgroundColor: THEME_COLOR_BACKGROUND,
        borderRadius: '4@msr',
        paddingTop: '5@msr',
        paddingBottom: '5@msr',
        paddingLeft: '5@msr',
        paddingRight: '5@msr',
    },
    membershipText: {
        color: WHITE,
        fontSize: '11@msr',
        fontFamily: 'medium'
    },
    aboutView: {
        width: width * 0.95,
        marginTop: '15@msr',
    },
    about: {
        color: TEXT_COLOR,
        fontSize: fontSize.sixteen,
        fontFamily: 'medium'
    },
    aboutText: {
        color: WHITE,
        fontSize: fontSize.twelve,
        fontFamily: 'regular'
    },
    readMore: {
        color: THEME_COLOR,
        textDecorationLine: 'underline',
        fontSize: fontSize.twelve,
        fontFamily: 'regular'
    },
    interest: {
        width: width * 0.95,
        marginTop: '10@msr',
    },
    interestView: {
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.85,
        alignItems: "center",
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
        flexWrap: 'wrap',
        paddingTop: '5@msr',
        paddingBottom: '5@msr',
    },
    profileImage: {
        width: '70@msr',
        height: '70@msr',
        borderRadius: '50@msr',
        borderWidth: '5@msr',
        borderColor: OTHER_GRAY,
    },
    star: {
        width: '14@msr',
        height: '14@msr',
        margin: '2@msr',
    },
    profileName: {
        fontSize: fontSize.twentytwo,
        fontFamily: 'regular',
        color: WHITE
    },
    userText: {
        fontSize: fontSize.twelve,
        fontFamily: 'regular',
        color: WHITE,
        opacity: .48,
    },
    lineView: {
        height: '18@msr',
        marginLeft: '4@msr',
        marginRight: '4@msr',
        width: '1.2@msr',
        backgroundColor: WHITE,
        opacity: .48,
    },
    userInfo: {
        width: width * 0.97,
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10@msr',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfoDetails1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2@msr',
    },
    userText2: {
        fontSize: fontSize.fourteen,
        fontFamily: 'bold',
        color: OTHER_GRAY,
    },
    userTextActive: {
        fontSize: fontSize.fourteen,
        fontFamily: 'bold',
        color: WHITE,
    },
    circle: {
        marginTop: 7,
        width: 90,
        height: 3,
        backgroundColor: THEME_COLOR
    },
    rectangle: {
        marginTop: '7@msr',
        width: '90@msr',
        height: '3@msr',
        backgroundColor: OTHER_GRAY
    },
    portfolioShowcaseInfo: {
        width: width * 0.47,
        height: width * 0.5,
        borderRadius: '5@msr',
        margin: '5@msr',
    },
    noUpload: {
        width: width,
        paddingTop: '40@msr',
        paddingBottom: '40@msr',
        height: height * 0.3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noMedia: {
        width: width,
        paddingTop: '40@msr',
        paddingBottom: '40@msr',
        height: height * 0.3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noMediaImageView: {
        borderRadius: '5@msr',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noMediaUploadView: {
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        width: width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noMediaImage: {
        width: '60@msr',
        height: '60@msr',
        // width: '10%',
        marginBottom: '21@msr',
    },
    noMediaImageVideo: {
        marginBottom: '25@msr',
    },
    noMediaView: {
        backgroundColor: THEME_COLOR,
        borderRadius: '4@msr',
        paddingTop: '10@msr',
        paddingBottom: '10@msr',
        width: width * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noMediaUpload: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.twentytwo,
        marginBottom: '20@msr',
    },
    noMediaText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.fourteen,
    },
})

export default Styles
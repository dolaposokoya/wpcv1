import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, fontSize } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.99,
    },
    card: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        marginBottom: height * 0.01,
        marginTop: height * 0.02,
        width: width,
    },
    profileImage: {
        marginTop: height * 0.02,
        borderRadius: '50@msr',
        width: '45@msr',
        height: '45@msr',
        marginLeft: '10@msr',
    },
    text: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
    },
    profileText: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.twelve,
        fontFamily: 'regular'
    },
    profileDate: {
        color: WHITE,
        opacity: 0.57,
        fontSize: fontSize.ten,
        fontFamily: 'regular'
    },
    profileImageView: {
        marginTop: '20@msr',
        width: width,
        height: '200@msr',
    },
    profileImageViewImg: {
        width: width,
        height: '90%',
        resizeMode: 'cover'
    },
    prevComments: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '7@msr',
        width: width * 0.95,
    },
    commentViewImg: {
        marginTop: '20@msr',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    commentImg: {
        width: '45@msr',
        height: '45@msr',
        borderRadius: '50@msr',
        // borderWidth: 2,
        // borderColor: 'red',
        resizeMode: 'cover'
    },
    pointerImg: {
        width: '18@msr',
        height: '15@msr',
        resizeMode: 'cover'
    },
    binImg: {
        width: '15@msr',
        marginLeft: '10@msr',
        height: '15@msr',
        resizeMode: 'cover'
    },
    prevCommentView: {
        // marginTop: '5@msr',
        marginRight: '28@msr',
        marginLeft: '30@msr',
    },
    prevCommentViewText: {
        color: WHITE,
        paddingLeft: '17@msr',
        fontSize: fontSize.fourteen,
        fontFamily: 'regular'
    },
    flexRow1: {
        marginTop: '-20@msr',
        width: width * 0.95,
    },
    flexRow1Image: {
        marginRight: '10@msr',
        width: '20@msr',
        height: '18@msr',
    },
    commentView: {
        justifyContent: 'flex-start',
        width: width * 0.9,
        marginLeft: '10@msr',
    },
    likes: {
        marginLeft: '10@msr',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: '5@msr',
    },
    like: {
        fontSize: fontSize.ten,
        fontFamily: 'regular',
        color: WHITE,
        opacity: 0.57,
        paddingBottom: '5@msr',
        paddingRight: '5@msr',
    },
    commentText: {
        color: WHITE,
        marginLeft: '10@msr',
        fontSize: fontSize.fourteen,
        fontFamily: 'regular'
    },
    commentText1: {
        color: WHITE,
        marginLeft: '10@msr',
        fontSize: fontSize.fourteen,
        fontFamily: 'regular',
        opacity: 0.57
    },

    inputView: {
        marginTop: '20@msr',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: '8@msr',
        paddingBottom: '8@msr',
        paddingLeft: '10@msr',
        paddingRight: '10@msr',
        position: 'absolute',
        width,
        height,
        bottom: 0,
    },
    textInput: {
        backgroundColor: WHITE,
        width: '80%',
        borderRadius: '4@msr',
        paddingTop: '8@msr',
        paddingBottom: '8@msr',
        paddingRight: '15@msr',
        paddingLeft: '15@msr',
    },
    sendBtn: {
        backgroundColor: '#2A78D1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4@msr',
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
        paddingRight: '15@msr',
        paddingLeft: '15@msr',
    },
    sendBtnText: {
        color: WHITE,
        fontFamily: 'regular',
        fontSize: fontSize.fourteen
    },

})

export default Styles
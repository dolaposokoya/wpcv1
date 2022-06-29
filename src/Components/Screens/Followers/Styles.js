import { Dimensions } from 'react-native';
import { THEME_COLOR_BACKGROUND, WHITE, PLUS_COLOR, THEME_COLOR, fontSize, BOTTOM_COLOR } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    contentContainerStyle: {
        width,
        backgroundColor: THEME_COLOR_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20@msr'
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.97,
        marginTop: height * 0.02,

    },
    interestContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: BOTTOM_COLOR,
        width: width * 0.92,
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
    peopleView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '5@msr',
        paddingBottom: '5@msr',
        paddingLeft: '10@msr',
    },
    imageView: {
        backgroundColor: PLUS_COLOR,
        width: '29@vs',
        height: '29@vs',
        borderRadius: '4@vs',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10@msr'
    },
    peopleImage: {
        width: '45@msr',
        height: '45@msr',
        marginRight: '12@msr'
    },
    interest: {
        fontFamily: 'bold',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'left'
    },
    interestText: {
        fontFamily: 'regular',
        fontSize: fontSize.ten,
        color: WHITE,
        textAlign: 'left',
        opacity: 0.57
    },
    interestMark: {
        width: '11@vs',
        height: '11@vs',
    },
    btnView: {
        position: 'relative',
        bottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: 20,
        paddingBottom: 20,
    },
    // btnView: {
    //     position: 'absolute',
    //     bottom: 10,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: width,
    //     paddingTop: 20,
    //     paddingBottom: 20,
    // },
    nextBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: THEME_COLOR,
        width: width * 0.92,
        paddingTop: '14@vs',
        paddingBottom: '14@vs',
    },
    nextBtnText: {
        fontFamily: 'medium',
        alignSelf: 'center',
        fontSize: fontSize.sixteen,
        color: WHITE
    },
})

export default Styles
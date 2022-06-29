import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { THEME_COLOR_BACKGROUND, WHITE, THEME_COLOR, LINE_COLOR, fontSize } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    scrollView: {
        width,
        height,
        backgroundColor: THEME_COLOR_BACKGROUND,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.97,
        marginTop: height * 0.03,
        // marginBottom: height * 0.03,
    },
    interestContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: '1@msr',
        borderTopWidth: '1@msr',
        borderBottomColor: LINE_COLOR,
        borderTopColor: LINE_COLOR,
        width: width * 0.97,
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: height * 0.022,
        paddingBottom: height * 0.022,
        paddingLeft: width * 0.035,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width * 0.03
    },
    image: {
        width: '22@msr',
        height: '15@msr',
        transform: [
            { rotate: "-90deg" }
        ]
    },
    interest: {
        fontFamily: 'medium',
        fontSize: fontSize.sixteen,
        color: WHITE,
        textAlign: 'center'
    },
    btnView: {
        position: 'relative',
        bottom: '10@msr',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: '20@msr',
        paddingBottom: '20@msr',
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
        paddingTop: '18@msr',
        paddingBottom: '18@msr',
    }
})

export default Styles
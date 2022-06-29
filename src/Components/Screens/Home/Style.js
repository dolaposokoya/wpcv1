import { Dimensions } from 'react-native'
import { THEME_COLOR, LIGHT_GRAY, WHITE, OFF_WHITE, THEME_COLOR_BACKGROUND, NAVY_BLUE, GRAY, HEADER_SECTION_COLOR, fonts, TEXT_COLOR, fontSize } from '../../../Config/Config'
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    loaderStyle: {
        // marginVertical: '@16msr',
        alignItems: "center",
    },
    scrollView: {
        backgroundColor: THEME_COLOR_BACKGROUND,
        paddingBottom: '99@msr'
    },
    welcomeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '20@msr',
        paddingBottom: '20@msr',
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    welcomeImage: {
        width: '19@msr',
        height: '19@msr',
        marginRight: '12@msr',
        marginLeft: '20@msr',
    },
    welcomeText: {
        color: WHITE,
        fontFamily: 'medium',
        fontSize: fontSize.sixteen
    },
    introPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    introPageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '5@msr',
        borderBottomLeftRadius: '5@msr',
        backgroundColor: HEADER_SECTION_COLOR,
        paddingLeft: width * 0.1,
        paddingRight: width * 0.1,
        paddingTop: '9@msr',
        paddingBottom: '9@msr',
    },
    introPageContainer1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: '5@msr',
        borderBottomRightRadius: '5@msr',
        backgroundColor: HEADER_SECTION_COLOR,
        paddingLeft: width * 0.1,
        paddingRight: width * 0.1,
        paddingTop: '9@msr',
        paddingBottom: '9@msr',
    },
    text: {
        color: WHITE,
        fontSize: fontSize.fourteen,
        fontFamily: 'regular',
        textAlign: 'center'
    },
    headingText: {
        textAlign: 'center',
        color: TEXT_COLOR,
        fontSize: fontSize.twenty,
        fontFamily: 'regular',
        marginBottom: '5@msr'
    },
    textUnderLine: {
        textAlign: 'center',
        color: WHITE,
        textDecorationLine: 'underline',
        fontSize: fontSize.twelve,
        fontFamily: 'medium'
    },
    showCase: {
        width,
        marginTop: width / 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: width / 20,
        paddingRight: width / 20,
        paddingBottom: '9@msr'
    },
    loadMore: {
        marginBottom: '60@msr',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadMoreText: {
        width: '30@msr',
        height: '30@msr',
    }
})

export default Styles
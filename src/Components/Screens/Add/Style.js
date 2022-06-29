import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { THEME_COLOR, LIGHT_GRAY, WHITE, BACKGROUND, fontSize } from '../../../Config/Config'

const { width, height } = Dimensions.get('screen')
const overlayHeight = height * 0.45
const Styles = ScaledSheet.create({
    SafeAreaView: {
        flex: 1,
        marginBottom: 15
    },
    scrollViewOld: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '33@msr',
        borderTopLeftRadius: '37@msr',
        borderTopRightRadius: '37@msr',
        backgroundColor: BACKGROUND,
    },
    scrollView: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: -(height * 0.05),
        borderTopLeftRadius: '37@msr',
        borderTopRightRadius: '37@msr',
        backgroundColor: WHITE,
    },
    container: {
        marginTop: height * 0.09,
        justifyContent: 'space-around'
    },
    host: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: WHITE,
        shadowOffset: {
            width: 0,
            height: '5@msr'
        },
        elevation: '10@msr',
        shadowRadius: '60.27@msr',
        shadowOpacity: '0.34@msr',
        padding: '10@msr',
        borderRadius: '10@msr',
        backgroundColor: THEME_COLOR
    },
    addImage: {
        marginRight: '15@msr',
        width: '20@msr',
        height: '20@msr',
    },
    text: {
        color: WHITE,
        fontSize: fontSize.fifteen,
        fontWeight: 'bold'
    },
    textInputcontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10@msr'
    },
    textInput: {
        backgroundColor: LIGHT_GRAY,
        borderRadius: '10@msr',
        width: width * 0.92,
        paddingLeft: '15@msr',
    },
    imageCompetition: {
        borderRadius: '10@msr',
        width: width * 0.92,
        minHeight: overlayHeight,
        // height: overlayHeight,
        position: 'relative'
    },
    top: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    top1: {
        top: '10@msr',
        right: '10@msr',
        paddingLeft: '20@msr',
        paddingRight: '20@msr',
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        backgroundColor: WHITE,
        borderRadius: '19@msr'
    },
    down: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: overlayHeight * '-0.40@msr',
        // bottom: overlayHeight * -0.45,
        width: width * 0.92,
    },
    down1: {
        left: width * 0.05,
        paddingLeft: '18@msr',
        paddingRight: '18@msr',
        paddingTop: '7@msr',
        paddingBottom: '7@msr',
        borderRadius: '19@msr',
        marginBottom: "5@msr"
    },
    down1Text: {
        color: WHITE,
        fontSize: fontSize.eigthteen,
        // fontWeight: 'bold'
    },
    down2Text: {
        color: WHITE,
        fontSize: '25@msr',
        fontWeight: 'bold',
        width: width * 0.7,
    },
    trophyImage: {
        width: '20@msr',
        height: '20@msr',
    },
    down3Text: {
        flexDirection: 'row',
        paddingLeft: '10@msr',
        width: width * 0.7,
        color: WHITE,
        fontWeight: '800'
    },
})

export default Styles
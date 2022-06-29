import { Dimensions } from 'react-native'
import { fonts, fontSize, LINE_COLOR, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        backgroundColor: THEME_COLOR_BACKGROUND
    },
    ratePhotographerView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30@msr',
        width: width * 0.92,
        paddingTop: '10@msr',
        paddingBottom: '30@msr',
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: '2@msr'
    },
    ratingsView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30@msr',
        width: width * 0.92,
        paddingBottom: '20@msr',
    },
    ratePhotographerName: {
        textAlign: 'center',
        marginTop: '5@msr',
        color: WHITE,
        fontSize: fontSize.twenty,
        fontFamily: 'bold'
    },
    profileImage: {
        width: '72@msr',
        height: '72@msr',
        borderColor: WHITE,
        borderWidth: 5,
        borderRadius: '100@msr',
    },
    ratingsName: {
        width: width * 0.6,
        paddingBottom: '10@msr',
        textAlign: 'center',
        color: WHITE,
        fontSize: fontSize.fourteen,
        fontFamily: 'regular'
    },
})
export default Styles

import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize, HEADER_COLOR, NAVY_BLUE, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
        height: '60@msr',
        width: width,
        paddingLeft: '7@msr',
        paddingRight: '7@msr',
    },
    headerMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5@msr'
    },
    headerMenu1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: WHITE,
        fontFamily: 'bold',
        fontSize: fontSize.twenty,
    },
    headerText1: {
        color: THEME_COLOR_BACKGROUND,
        fontFamily: 'bold',
        fontSize: fontSize.twenty,
    },
    headerMenu2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menus: {
        margin: '5@msr',
        height: '18@msr',
        width: '18@msr',
    },
    notification: {
        position: 'absolute',
        backgroundColor: '#F31954',
        width: '9@msr',
        height: '9@msr',
        right: '2@msr',
        top: '5@msr',
        borderRadius: '50@msr'
    }
})
export default Styles

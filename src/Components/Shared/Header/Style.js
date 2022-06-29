import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { HEADER_COLOR } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    header: {
        paddingTop: '40@msr',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
        height: '105@msr',
        width: width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 50.27,
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
    headerMenu2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5@msr'
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

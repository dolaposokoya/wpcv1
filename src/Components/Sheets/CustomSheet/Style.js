import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { GRAY, NAVY_BLUE, TEXT_BLUE, WHITE } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    sheet: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: WHITE,
        borderRadius: 10,
        borderBottomColor: NAVY_BLUE,
        width: width * 0.85,
    },
    sheetBottom: {
        backgroundColor: WHITE,
        width: width * 0.85,
        marginTop: 10,
        borderRadius: 10
    },
    sheetOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: GRAY,
        borderBottomWidth: 1,
    },
    sheetOptions1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
    },
    sheetOptionstText: {
        color: TEXT_BLUE,
        fontSize: 16,
        fontFamily: 'regular'
    },
})
export default Styles

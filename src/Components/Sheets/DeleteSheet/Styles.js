import { Dimensions } from 'react-native'
import { fontSize, INPUT_TEXT, LINE_COLOR3, NAVY_BLUE, TEXT_COLOR1, THEME_COLOR_BACKGROUND, WHITE } from '../../../Config/Config';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    more: {
        width: '10@msr',
        height: '25@msr',
        marginLeft: '15@msr',
        marginRight: '7@msr',
    },
    sheet: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderTopLeftRadius: '10@msr',
        borderTopRightRadius: '10@msr',
        borderBottomColor: NAVY_BLUE,
        width: width,
    },
    sheetBottom: {
        backgroundColor: WHITE,
    },
    sheetOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15@msr',
    },
    sheetOptions2: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10@msr',
        borderBottomColor: LINE_COLOR3,
        borderBottomWidth: 1,
        width: width * 0.9,
        paddingBottom: '5@msr',
    },

    sheetOptions1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15@msr',
        paddingBottom: '15@msr',
    },
    sheetOptionstText: {
        color: THEME_COLOR_BACKGROUND,
        fontSize: '24@msr',
        fontFamily: 'medium'
    },
    sheetOptionstText3: {
        color: INPUT_TEXT,
        fontSize: fontSize.fourteen,
        fontFamily: 'medium',
        textDecorationLine: 'underline'
    },
    sheetOptionstText1: {
        color: INPUT_TEXT,
        fontSize: fontSize.fourteen,
        fontFamily: 'medium',
        textAlign: 'center'
    },
    sheetOptionstText2: {
        color: TEXT_COLOR1,
        fontSize: fontSize.eigthteen,
        fontFamily: 'medium',
        textAlign: 'center'
    },
})
export default Styles

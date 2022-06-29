import { Dimensions } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize, GRAY, NAVY_BLUE, TEXT_BLUE, THEME_COLOR_BACKGROUND, UPGRADE_COLOR, WHITE } from '../../../Config/Config';


const { width, height } = Dimensions.get('screen')
const Styles = ScaledSheet.create({
    sheet: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: WHITE,
        borderTopLeftRadius: '10@msr',
        borderTopRightRadius: '10@msr',
        borderBottomColor: NAVY_BLUE,
        marginBottom: 0,
        width: width,
    },
    sheetOptions: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20@msr',
        paddingBottom: '20@msr',
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1,
    },
    optionsView: {
        width: width * 0.87,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '20@msr',
        flexDirection: 'row'
    },
    optionsViewImage: {
        width: '11@msr',
        height: '9@msr',
        marginRight: '10@msr'
    },
    optionsViewText: {
        fontSize: fontSize.fourteen,
        fontFamily: 'regular',
        color: THEME_COLOR_BACKGROUND
    },
    sheetOptions1: {
        alignItems: 'flex-start',
        width: width * 0.87,
        paddingTop: '20@msr',
    },
    sheetOptionstText: {
        color: THEME_COLOR_BACKGROUND,
        fontSize: fontSize.fourteen,
        fontFamily: 'regular',
    },
    sheetOptionstText2: {
        color: UPGRADE_COLOR,
        fontSize: fontSize.sixteen,
        fontFamily: 'bold',
    },
    sheetOptionsHeaderText: {
        color: THEME_COLOR_BACKGROUND,
        fontSize: '26@msr',
        fontFamily: 'light',
    },
    sheetOptionstText1: {
        color: '#F55656',
        fontSize: fontSize.fourteen,
        fontFamily: 'bold',
        textAlign: 'left',
    },
    upgradeBtn: {
        width: width * 0.87,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20@msr',
        paddingBottom: '20@msr',
        borderRadius: '4@msr'
    },
    linearBtn: {
        width: width * 0.87,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12@msr',
        paddingBottom: '12@msr',
        borderWidth: '1@msr',
        borderColor: '#DEDEDE',
        borderRadius: '4@msr'
    },
})
export default Styles

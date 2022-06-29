import { Dimensions, StatusBar } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { LIGHT_GRAY, THEME_COLOR_BACKGROUND, fontSize, fonts, THEME_COLOR } from '../../../Config/Config'

const { width, height } = Dimensions.get('window');

const Styles = ScaledSheet.create({
    closedTable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
    },
    closedImage: {
        width: '35@msr',
        height: '35@msr',
        marginRight: '10@msr'
    },
    closedContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        width: width * 0.89
    },
    closedText: {
        fontSize: fontSize.fourteen,
        fontFamily: 'semiBold',
        color: THEME_COLOR_BACKGROUND,
        textAlign: 'left'
    },
    closedText1: {
        fontSize: fontSize.twelve,
        color: THEME_COLOR,
        textDecorationLine: 'underline',
        fontFamily: 'regular',
    },
    lineThrough: {
        width: width * 0.9,
        height: '2@msr',
        backgroundColor: LIGHT_GRAY,
        marginTop: '10@msr',
        marginBottom: '10@msr',
    },
})

export default Styles